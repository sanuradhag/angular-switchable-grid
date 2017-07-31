import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { FilterComponent } from './filter/filter.component';
import { ItemFilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  exports: [GridComponent, FilterComponent, ItemFilterPipe],
  declarations: [GridComponent, FilterComponent, ItemFilterPipe],
  providers: [],
})
export class GridModule {
}
