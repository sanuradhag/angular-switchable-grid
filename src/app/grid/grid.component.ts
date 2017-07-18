import { Component, Input, Output, OnChanges, EventEmitter, TemplateRef, ContentChild, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'angular-switchable-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

/**
 * Class representing the grid list toggle component.
 */
export class GridComponent implements OnChanges {

  /**
   * Data to displayed in the grid.
   */
  @Input()
  public data: any[];
  /**
   * Column titles to be displayed in the grid.
   */
  @Input()
  public columnTitles: any[];
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
   * Sort data ascending when loading.
   */
  @Input()
  public sortAscending: boolean;
  /**
   * Grid view or list view.
   */
  @Input()
  public isGridView: boolean;
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

  private dataObjectKeys: string[];
  private formattedStrings: string[];


  constructor() {
    this.data = [];
    this.sortedData = this.data;
    this.isSortExpand = false;
    this.filterTerm = '';
    this.sortByCategory = '';
    this.filterBy = '';
    this.selectedItems = [];
    this.enableMultiSelect = null;
    this.enableSort = false;
    this.enableSelection = true;
    this.dataObjectKeys = [];
    this.formattedStrings = [];
  }

  ngOnChanges(changes: any) {
    this.gridClass = this.isGridView ? '' : 'table-grid';
    this.sortedData = this.data;
    if (changes.data) {
      _.each(this.selectedItems, (item: any) => {
        item.selected = false;
      });
      this.selectedItems = [];
      this.sortByCategory = this.columnTitles[0];
    }
    this.dataObjectKeys = _.keys(this.data[0]);
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
   */
  public getSortCategory(element: any): void {
    if (this.sortByCategory === element.target.textContent.trim()) {
      this.sortAscending = !this.sortAscending;
      this.sortedData = _.reverse(this.sortedData);
      element.target.className = 'active';
      return;
    }
    this.sortByCategory = element.target.textContent.trim();
    this.sortedData = _.sortBy(this.sortedData, ([this.mapSortByCategory(this.sortByCategory)]));
    this.isSortExpand = false;

    _.each(element.target.parentElement.children, (child) => {
      child.className = 'header-item';
    });
    element.target.className = 'active';
  }

  /**
   * Toggle the sort between ascending and descending.
   */
  public descendingSort(): void {
    this.sortAscending = !this.sortAscending;
    this.sortedData = _.reverse(this.sortedData);
  }

  public selectAll(): void {
    _.each(this.data, (item) => {
      item.selected = true;
    });
    this.selectedItems = _.cloneDeep(this.data);
    this.getSelectedItems.emit(this.selectedItems);
  }

  public deselectAll(): void {
    _.each(this.data, (item: any) => {
      item.selected = false;
    });
    this.selectedItems = [];
    this.getSelectedItems.emit([]);
  }

  /**
   * Set the selected device from the device list.
   * @param device - selected device.
   * @param event
   */
  private setSelectedItem(selectedItem: any): void {
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

  /**
   * Emits selected device(s) according to the selection type(single/multiple).
   * @param device - selected device.
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
   * @param element
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

  private mapSortByCategory(columnName: string): string {
    let objectIndex: number = 0;
    columnName = columnName.toLocaleLowerCase();
    columnName = columnName.replace(' ', '');
    if (this.dataObjectKeys.length === 0) {
      this.dataObjectKeys = _.keys(this.data[0]);
    }
    if (this.formattedStrings.length === 0) {
      _.each(this.dataObjectKeys, (property: string) => {
        const formattedString = _.replace(property, new RegExp('[^a-zA-Z0-9]+'), '');
        this.formattedStrings.push(formattedString);
      });
    }

    _.each(this.formattedStrings, (propertyName: string, index: number) => {
      if (propertyName.toLowerCase() === columnName) {
        objectIndex = index;
      }
    });
    return this.dataObjectKeys[objectIndex];
  }

}
