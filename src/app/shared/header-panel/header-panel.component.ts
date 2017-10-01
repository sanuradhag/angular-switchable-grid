import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {
  public version: string;

  constructor() {
    this.version = '1.0.10';
  }

  ngOnInit() {
  }

}
