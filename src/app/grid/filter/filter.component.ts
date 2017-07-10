import {Component, Output, EventEmitter, Input, OnChanges} from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html'
})
/**
 * Class representing the FilterComponent.
 */
export class FilterComponent implements OnChanges {

  @Input() filterBy: string;
  @Input() resetFilterTerm: boolean;
  @Output() getFilterTerm: EventEmitter<string> = new EventEmitter<string>();

  private isFilterEnabled: boolean;
  private filterTerm: string;

  constructor() {
    this.isFilterEnabled = false;
    this.resetFilterTerm = false;
    this.filterTerm = '';
    this.filterBy = '';
  }

  ngOnChanges() {
    if (this.resetFilterTerm) {
      this.filterTerm = '';
    }
  }

  /**
   * Change the filter text box view.
   */
  private changeFilterViewState(): void {
    this.isFilterEnabled = true;
  }

  /**
   * This method will be triggered when the key press event is fired in the text box.
   */
  private onFilterTextChnage(): void {
    this.getFilterTerm.emit(this.filterTerm);
  }

}
