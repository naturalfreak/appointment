import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SubCategory} from '../subCategory/index';
import {CategoryModel} from '../../models/categoryModel';
import {CategoryService} from '../../services/categoryService';
@Component({
    templateUrl: './build/pages/home/home.html',
})
export class HomePage {

  constructor(public nav: NavController, private _category: CategoryService) {

  }

  openNavDetailsPage(name, items){
    let data = {
      name: name,
      items: items
    }
    this.nav.push(SubCategory, data);
  }

}
