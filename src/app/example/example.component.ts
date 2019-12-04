import {Component, ViewChild} from '@angular/core';

import {GridComponent} from '../grid';
import {users} from '../mock-data';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  public data: any;
  public filterTerm: string;
  public filterBy: string;
  public placeholder: string;
  public resetFilterTerm: boolean;
  public isGridView: boolean;
  public enableSelection: boolean;
  public enableMultiSelect: boolean;
  public enableSort: boolean;
  public columns: Array<{ property: string, displayName: string, width?: string }>;
  public selectedItems: any[];

  @ViewChild(GridComponent, {static: false})
  public grid: GridComponent;

  constructor() {
    this.data = users;
    this.columns = [
      {property: 'id', displayName: 'ID', width: '5%'},
      {property: 'first_name', displayName: 'First name', width: '15%'},
      {property: 'last_name', displayName: 'Last name', width: '16%'},
      {property: 'email', displayName: 'Email', width: '17%'},
      {property: 'gender', displayName: 'Gender', width: '18%'},
      {property: 'ip_address', displayName: 'IP address', width: '19%'}
    ];
    this.filterTerm = '';
    this.placeholder = this.columns[0].displayName;
    this.filterBy = this.columns[0].property;
    this.resetFilterTerm = false;
    this.isGridView = false;
    this.enableSelection = true;
    this.enableSelection = true;
    this.enableMultiSelect = true;
    this.enableSort = true;
    this.selectedItems = [];
  }

  /**
   * Get filter term from the filter component.
   * @param filterTerm
   */
  public getFilterTerm(filterTerm: string): void {
    this.filterTerm = filterTerm;
    this.resetFilterTerm = false;
  }

  /**
   * Get selected data from the grid.
   * @param data - data from the grid.
   */
  public getSelectedItems(data: any): void {
    if (data) {
      this.selectedItems = data;
      console.log(this.selectedItems);
    }
  }

  /**
   * Set filter by category.
   * @param item - data item.
   */
  public setFilterBy(item): void {
    this.filterBy = item.property;
    this.placeholder = item.displayName;
  }

  /**
   * Event jandle for template change.
   * @param data - event payload.
   */
  public onTemplateChange(data: any): void {
    data ? this.data = [] : this.data = users;
  }

  /**
   * Select all items from the grid.
   */
  public selectAll(): void {
    this.grid.selectAll();
  }

  /**
   * Deselect all items from the grid.
   */
  public deselectAll(): void {
    this.grid.deselectAll();
  }
}
