import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  change = "message";
  
  items=[];
  doInfinite(infiniteScroll) {

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }

      infiniteScroll.complete();
      
      this.items.length=0;
    }, 666);
  }
}