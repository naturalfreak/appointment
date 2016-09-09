import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/SubCategory/index.html'
})
export class SubCategory {
  private data: any;
  constructor(params: NavParams) {
    this.data = params.data;
  }
}
