import { Component, Input } from '@angular/core';

@Component({
  selector: 'blank',
  templateUrl: 'blank.html'
})
export class BlankComponent {

  constructor() {}

  @Input() height;
  @Input() bgColor;

  OnInit() {
    
  }

}
