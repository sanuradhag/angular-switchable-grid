import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { FilterComponent } from './filter/filter.component';
import { ItemFilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [GridComponent, FilterComponent, ItemFilterPipe],
  declarations: [GridComponent, FilterComponent, ItemFilterPipe],
  providers: [],
})
export class GridModule {
}
