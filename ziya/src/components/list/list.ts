import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  constructor() {
    
  }

  @Input() config
  price = "display: inline;";
  info = "display: block;";
}
