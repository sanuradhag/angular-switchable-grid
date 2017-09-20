import { Component, ViewChild } from '@angular/core';

import { GridComponent } from '../grid/grid.component';
import { users } from '../mock-data';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  public data: any;
  public columnTitles: string[];
  public filterTerm: string;
  public filterBy: string;
  public placeholder: string;
  public resetFilterTerm: boolean;
  public isGridView: boolean;
  public enableSelection: boolean;
  public enableMultiSelect: boolean;
  public enableSort: boolean;
  public dataObject: Array<{ name: string, displayName: string }>;

  @ViewChild(GridComponent)
  public grid: GridComponent;

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
    this.enableSelection = true;
    this.enableSelection = true;
    this.enableMultiSelect = true;
    this.enableSort = true;
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

  /**
   * Set filter by category.
   * @param item - data item.
   */
  public setFilterBy(item): void {
    this.filterBy = item.name;
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
}
