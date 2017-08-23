import { Component } from '@angular/core';
import { users } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public data: any;
  public columnTitles: string[];
  public filterTerm: string;
  public filterBy: string;
  public placeholder: string;
  public resetFilterTerm: boolean;
  public isGridView: boolean;
  public dataObject: Array<{ name: string, displayName: string }>;

  constructor() {
    this.data = users;
    this.dataObject = [
      {name: 'id', displayName: 'ID'},
      {name: 'first_name', displayName: 'First name'},
      {name: 'last_name', displayName: 'Last name'},
      {name: 'email', displayName: 'Email'},
      {name: 'gender', displayName: 'Gender'},
      {name: 'ip_address', displayName: 'IP address'}
    ];
    this.columnTitles = ['ID', 'First name', 'Last name', 'Email', 'Gender', 'IP address'];
    this.filterTerm = '';
    this.placeholder = this.columnTitles[0];
    this.filterBy = this.dataObject[0].name;
    this.resetFilterTerm = false;
    this.isGridView = true;
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
    console.log(data);
  }

  public setFilterBy(item): void {
    this.filterBy = item.name;
    this.placeholder = item.displayName;
  }

}
