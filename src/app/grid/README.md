# Angular Switchable Grid

A simple grid for angular, Which can be switched between typical **`List`** view and a **`tile`** block view


### Demo

https://sanuradhag.github.io/angular-switchable-grid/

### Installation

Install through npm;

    npm install --save angular-switchable-grid
    
Then import **`GridModule`** and include it in your apps for module.
    
    import { Component, NgModule } from '@angular/core';
    import { GridModule } from 'angular-switchable-grid';
     
    @NgModule({
      imports: [
        GridModule
      ]
    })
    export class MyModule {}
 
Then add  **`angular-switchable-grid`** to your app template.
    
    <angular-switchable-grid
      [data]="data"
      [columnTitles]="columnTitles"
      [enableSelection]="true"
      [enableMultiSelect]="true"
      [filterBy]="'first_name'"
      [filterTerm]="filterTerm"
      [enableSort]="true"
      [sortAscending]="true"
      [isGridView]="isGridView"
      [noDataTemplate]="null"
      (getSelectedItems)="getSelectedItems($event)"
    >
    
      <ng-template let-item>
        <div class="hidden-grid name">{{item.id}}</div>
        <div class="show-table">{{item.first_name}}</div>
        <div class="show-table">{{item.last_name}}</div>
        <div class="show-table">{{item.email}}</div>
        <div class="hidden-grid show-table">{{item.gender}}</div>
        <div class="show-table">{{item.ip_address}}</div>
      </ng-template>
    
    </angular-switchable-grid>


### Styles 

Style guide will be added soon.


### Documentation
   
##### angular-switchable-grid properties.

   
   Property| Input/Output| Default value | Description
   | -------| --------|-------|:--------------|
   |[data]| Input | [] - empty array |The data to be displayed in the grid.|
   |[columnTitles]| Input| [] - empty array |  Titles of the columns in the grid.|
   |[enableSelection]| Input| false| Enable the selection of the rows of the grid.| 
   |[enableMultiSelect]| Input| false| Enable the multiple selection of the rows of the grid.| 
   |[filterBy]| Input| '' - empty string| Grid will be filtered by this key.| 
   |[filterTerm]| Input| '' - empty string| Grid will filter its's content by the **`filterBy`** and will display only the items which are similar to the this.| 
   |[enableSort]| Input  | false |Enables sorting in the grid|
   |[sortAscending]| Input  | false |If sets to true, Grid will be sorted ascending before displaying the data|
   |[isGridView]| Input  | false |If sets to true, Grid's view will be changed to **Tile** view from **List** view.|
   |[noDataTemplate]| Input  | Simple text 'No Data'  | The template that will be displayed when there is no data.|
   |(getSelectedItems)| Output  | [] - empty array  | Will emit the selected items when user is selecting items from the grid.|


And should pass a template for the row template.
 
 
     <ng-template let-item>
            <div>{{item.id}}</div>
            <div>{{item.first_name}}</div>
            <div>{{item.last_name}}</div>
            <div>{{item.email}}</div>
            <div>{{item.gender}}</div>
            <div>{{item.ip_address}}</div>
     </ng-template>

### ToDo

* Grid pagination.
* Lazy loading.
