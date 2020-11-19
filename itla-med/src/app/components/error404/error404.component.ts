import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css'],
})
export class Error404Component {
  constructor(private loc: Location) {}

  public goBack() {
    this.loc.back();
  }
}
