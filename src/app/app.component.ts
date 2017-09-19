import { Component } from '@angular/core';
const packageDetails = require('./grid/package.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: string;
  constructor() {
    this.version = packageDetails.version;
  }
}
