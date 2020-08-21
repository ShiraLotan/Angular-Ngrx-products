import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductStore } from '../interface/app.interface';

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrls: ["./store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  @Input() productsList: Product[];
  groupedStores: ProductStore[];

  constructor() {
   }

  ngOnInit() {
    const storesArr = [];
    let group = this.productsList.reduce((r, a) => {
      r[a.storeName] = ++r[a.storeName] || 1;
      return r;
    }, {});
    for (let [key, value] of Object.entries(group)) {
      const storeObj = { name: key, sum: value };
      storesArr.push(storeObj)
    }
    this.groupedStores = storesArr;
  }
}