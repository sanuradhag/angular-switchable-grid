import {
  Component,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  TemplateRef,
  ContentChild,
  HostListener
} from '@angular/core';

import * as _ from 'lodash';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'angular-switchable-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

/**
 * Class representing the grid component.
 */
export class GridComponent implements OnChanges {

  /**
   * Data to displayed in the grid.
   */
  @Input()
  public data: any[];
  /**
   * Column data to be displayed in the grid.
   * width should be a string ex: - 50%, 50px
   */
  @Input()
  public columns: Array<{ property: string, displayName: string, width?: string }>;
  /**
   * Enable item selection from the grid.
   */
  @Input()
  public enableSelection: boolean;
  /**
   * Enable multiple item selections in the grid.
   */
  @Input()
  public enableMultiSelect: boolean;
  /**
   * Filter term for the grid.
   */
  @Input()
  public filterTerm: string;
  /**
   * Filter by.
   */
  @Input()
  public filterBy: string;
  /**
   * Enable data sorting.
   */
  @Input()
  public enableSort: boolean;

  /**
   * Enable pagination.
   */
  @Input()
  public enablePagination: boolean;

  /**
   * Grid view or list view.
   */
  @Input()
  public isGridView: boolean;

  @Input()
  public itemsPerPage: number;
  /**
   * No data template.
   */
  @Input()
  public noDataTemplate: TemplateRef<any>;

  @Output()
  public getSelectedItems: EventEmitter<any[]> = new EventEmitter<any[]>();

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  public gridClass: string;
  public sortedData: any[];
  public selectedItems: any[];
  public isSortExpand: boolean;
  public sortByCategory: string;
  public sortAscending: boolean;
  public pageNumber: number;
  public offSet: number;

  constructor() {
    this.data = [];
    this.sortedData = [];
    this.isSortExpand = false;
    this.enablePagination = false;
    this.filterTerm = '';
    this.sortByCategory = '';
    this.filterBy = '';
    this.selectedItems = [];
    this.enableMultiSelect = null;
    this.enableSort = false;
    this.enableSelection = true;
    this.sortAscending = true;
    this.isGridView = true;
    this.pageNumber = 1;
    this.offSet = 0;
    this.itemsPerPage = 5;
  }

  /**
   * Inpur data changes i=event hanlder.
   * @param changes - input value changes.
   */
  ngOnChanges(changes: any) {
    this.gridClass = this.isGridView ? 'grid' : 'table-grid';
    this.sortedData = this.data;
    if (changes.data) {
      _.each(this.selectedItems, (item: any) => {
        item.selected = false;
      });
      this.selectedItems = [];
      this.sortByCategory = this.columns[0].property;
      this.sliceData(this.data);
    }
    if (changes.filterTerm) {
      this.sortedData = this.filterData(this.data, this.filterTerm, this.filterBy);
    }
  }

  /**
   * Toggle the view of sort category menu between collapsed and expand.
   */
  public toggleSortExpand(): void {
    this.isSortExpand = !this.isSortExpand;
  }

  /**
   * Get the sort category from the sort category dropdown.
   * @param element - selected menu items html element.
   * @param sortBy - sort category
   */
  public getSortCategory(element: any, sortBy: string): void {
    if (this.sortByCategory === sortBy) {
      this.sortAscending = !this.sortAscending;
      if (this.sortAscending) {
        this.sortedData = _.sortBy(this.data, sortBy);
        this.data = this.sortedData;
      } else {
        this.sortedData = _.sortBy(this.data, sortBy);
        this.sortedData = _.reverse(this.sortedData);
        this.data = this.sortedData;
      }
      element.target.className = 'active';
      this.sliceData(this.sortedData);
      return;
    }
    this.sortByCategory = sortBy;
    this.sortedData = _.sortBy(this.data, sortBy);
    this.isSortExpand = false;

    _.each(element.target.parentElement.children, (child: any) => {
      child.className = 'header-item';
    });
    element.target.className = 'active';
    this.sliceData(this.sortedData);
  }

  /**
   * Toggle the sort between ascending and descending.
   */
  public descendingSort(): void {
    this.sortAscending = !this.sortAscending;
    this.sortedData = _.reverse(this.data);
  }

  /**
   * Select all items in the grid.
   */
  public selectAll(): void {
    _.each(this.data, (item) => {
      item.selected = true;
    });
    this.selectedItems = _.cloneDeep(this.data);
    this.getSelectedItems.emit(this.selectedItems);
  }

  /**
   * Deselect all items in the grid.
   */
  public deselectAll(): void {
    _.each(this.data, (item: any) => {
      item.selected = false;
    });
    this.selectedItems = [];
    this.getSelectedItems.emit([]);
  }

  /**
   * Set the selected item from the item list.
   * @param selectedItem - selected item.
   */
  public setSelectedItem(selectedItem: any): void {
    if (!this.enableSelection) {
      return;
    }
    if (this.enableMultiSelect == null) {
      return;
    }
    if (selectedItem.selected) {
      selectedItem.selected = false;
      _.remove(this.selectedItems, (item: any) => {
        return item.id === selectedItem.id;
      });
      this.getSelectedItems.emit(this.selectedItems);
    } else {
      this.setSelectionPattern(selectedItem);
    }
  }

  public onNextClick(): void {
    if (this.offSet === 0) {
      this.offSet = 1;
    }
    this.offSet = this.pageNumber * this.itemsPerPage;
    this.sliceData(this.data);
    this.pageNumber += 1;
  }

  public onPreviousClick(): void {
    this.pageNumber -= 1;
    this.offSet = (this.pageNumber - 1) * this.itemsPerPage;
    this.sliceData(this.data);
  }

  public onPageChange(page: number): void {
    this.pageNumber = page;
    this.offSet = this.pageNumber * this.itemsPerPage;
    this.sliceData(this.data);
  }

  /**
   * Emits selected item(s) according to the selection type(single/multiple).
   * @param item - selected item.
   */
  private setSelectionPattern(item: any): void {
    if (!this.enableMultiSelect) {
      const index = _.findIndex(this.sortedData, ['selected', true]);
      index !== -1 ? this.sortedData[index].selected = false : {};
      this.selectedItems = [item];
      item.selected = true;
      this.getSelectedItems.emit(this.selectedItems);
    } else {
      this.selectedItems.push(item);
      item.selected = true;
      this.getSelectedItems.emit(this.selectedItems);
    }
  }

  /**
   * This method triggers when the document is clicked.
   * @param element - html element.
   */
  @HostListener('document:click', ['$event'])
  private onclick(element: any) {
    if (this.isSortExpand && (element.target.className !== 'btn' && element.target.className !== 'header-item')) {
      this.isSortExpand = false;
    }

    if (this.isSortExpand && element.target.parentElement.className.includes('grid-header')) {
      this.isSortExpand = true;
    }
  }

  /**
   * Export the grid data as a excel file.
   */
  public exportAsExcelFile(): void {
    const json = this.data;
    const excelFileName = 'angular_switchable_grid_data';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  /**
   * Save the exported excel file.
   * @param buffer
   * @param fileName - file name.
   */
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const file: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(file, `${fileName}${EXCEL_EXTENSION}`);
  }

  private filterData(itemList: any[], filterTerm?: string, filterBy?: any): any[] {
    if (!filterBy || filterTerm === '') {
      this.offSet = (this.pageNumber - 1) * this.itemsPerPage;
      return this.data.slice(this.offSet, this.offSet + this.itemsPerPage);
    }
    let data;
    filterBy = filterBy.toString();
    data = itemList.filter((item: any) => {
      if (item[filterBy]) {
        return item[filterBy].toString().toLowerCase().includes(filterTerm.toLowerCase());
      }
    });
    this.offSet = 0;
    data = data.slice(this.offSet, this.offSet + this.itemsPerPage);
    return data;
  }

  private sliceData(data: any[]): void {
    this.sortedData = data.slice(this.offSet, this.offSet + this.itemsPerPage);
  }

  // private processData(): void {
  //   let processedData = [];
  //   // filter
  //   if (!this.filterBy || this.filterTerm === '') {
  //     processedData = this.sortedData;
  //   }
  //   this.filterBy = this.filterBy.toString();
  //   processedData = this.data.filter((item: any) => {
  //     if (item[this.filterBy]) {
  //       return item[this.filterBy].toString().toLowerCase().includes(this.filterTerm.toLowerCase());
  //     }
  //   });
  //   // sort
  //   this.sortAscending = !this.sortAscending;
  //   if (this.sortAscending) {
  //     this.sortedData = _.sortBy(this.data, this.sortByCategory);
  //     this.data = this.sortedData;
  //   } else {
  //     this.sortedData = _.sortBy(this.data, this.sortByCategory);
  //     this.sortedData = _.reverse(this.sortedData);
  //     this.data = this.sortedData;
  //   }
  //   processedData = this.data;
  //   // slice
  //
  //   processedData.slice(this.offSet, this.offSet + this.itemsPerPage)
  //
  //   this.sortedData = processedData;
  // }

  public getWidths(): string[] {
    const widths = [];
    this.columns.forEach((column: any) => {
      if (column.width) {
        widths.push(column.width);
      } else {
        widths.push('');
      }
    });
    return widths;
  }

}
