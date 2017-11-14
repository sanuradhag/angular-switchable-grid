import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'grid-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnChanges {

  @Input()
  public page: number;

  @Input()
  public offSet: number;

  @Input()
  public itemsPerPage: number;

  @Input()
  public dataCount: number;

  @Output()
  public nextClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public previousClick: EventEmitter<any> = new EventEmitter<any>();

  public noOfPages: number;


  constructor() {
    this.noOfPages = 0;
  }

  ngOnChanges(changes) {
    if (changes.dataCount && changes.itemsPerPage) {
      this.noOfPages = (this.dataCount / this.itemsPerPage);
    }
  }


  public onNextClick(): void {

    if (this.page >= this.noOfPages) {
      return;
    }
    this.nextClick.emit();
  }

  public onPreviousClick(): void {
    if (!this.page || this.page === 1) {
      return;
    }
    this.previousClick.emit();
  }
}
