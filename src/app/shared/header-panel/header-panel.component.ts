import { Component, OnInit } from '@angular/core';
// @ts-ignore
const packageDetails = require('../../grid/package.json');

@Component({
  selector: 'header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {
  public version: string;

  constructor() {
    this.version = packageDetails.version;
  }

  ngOnInit() {
  }

}
