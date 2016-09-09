export class CategoryModel{
  id: number;
  name: string;
  icon: string;
  sub: Array<CategoryModel>;
  constructor(id: number, name: string, icon: string, sub: Array<CategoryModel>){
    this.id = id;
    this.name = name;
    this.sub = sub;
    this.icon = icon;
  }
}
