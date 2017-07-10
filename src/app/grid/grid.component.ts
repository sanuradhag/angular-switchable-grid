import { Component, Input, Output, OnChanges, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'angular-switchable-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  host: {
    '(document:click)': 'onclick($event)'
  }
})

/**
 * Class representing the grid list toggle component.
 */
export class GridComponent implements OnChanges {

  @Input()
  public data: any[];
  @Input()
  public columnTitles: any[];
  @Input()
  public sortAscending: boolean;
  @Input()
  public isGridView: boolean;
  @Input()
  public filterBy: string;
  @Input()
  public filterTerm: string;
  @Input()
  public multiSelect: boolean;
  @Input()
  public enableSort: boolean;
  @Input()
  public enableSelection: boolean;
  @Output()
  public getSelectedItems: EventEmitter<any[]> = new EventEmitter<any[]>();

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  public gridClass: string;
  public sortedData: any[];
  public selectedItems: any[];
  public isSortExpand: boolean;
  public sortByCategory: string;


  constructor() {
    this.sortedData = this.data;
    this.isSortExpand = false;
    this.filterTerm = '';
    this.sortByCategory = 'id';
    this.selectedItems = [];
    this.multiSelect = null;
    this.enableSort = false;
    this.enableSelection = true;
  }

  ngOnChanges(changes: any) {
    this.gridClass = this.isGridView ? '' : 'table-grid';
    this.sortedData = this.data;
    if (changes.data) {
      _.each(this.selectedItems, (item: any) => {
        item.selected = false;
      });
      this.selectedItems = [];
    }
    // if (changes.deselectAll && changes.deselectAll.currentValue) {
    //   _.each(this.selectedItems, (item: any) => {
    //     item.selected = false;
    //   });
    //   this.selectedItems = [];
    // }
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
    this.sortedData = _.sortBy(this.sortedData, ([this.sortByCategory.toLocaleLowerCase()]));
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
    if (this.multiSelect == null) {
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
    if (!this.multiSelect) {
      let index = _.findIndex(this.sortedData, ['selected', true]);
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
  private onclick(element: any) {
    if (this.isSortExpand && (element.target.className !== 'btn' && element.target.className !== 'header-item')) {
      this.isSortExpand = false;
    }

    if (this.isSortExpand && element.target.parentElement.className.includes('grid-header')) {
      this.isSortExpand = true;
    }
  }

}
