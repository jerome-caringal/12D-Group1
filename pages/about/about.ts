import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
})
export class AboutPage {

originalPrice: number;
sellingPrice: number;
savings: number;
markdownRate: number;

  constructor(public navCtrl: NavController) {
  }
compute(){
this.savings = (this.originalPrice - this.sellingPrice );

this.markdownRate = ((this.savings/this.sellingPrice) * 100)

  }

}
