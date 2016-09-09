import {Injectable} from '@angular/core';
import {CategoryModel} from '../models/categoryModel';

@Injectable()
export class CategoryService {

  private categories: Array<CategoryModel>;

  constructor(){
    this.categories = [
      new CategoryModel(1, 'Fashio', 'angular', [
        new CategoryModel(1, 'Fashion2', 'angular', null)
      ])
    ]
  }

  getCategories(){
    return this.categories;
  }
}
