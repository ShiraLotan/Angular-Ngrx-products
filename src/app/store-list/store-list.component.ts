import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductStore } from '../interface/app.interface';

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrls: ["./store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  @Input() productsList: Product[];
  @Input() isRecived: boolean;

  groupedStores: ProductStore[];

  constructor() {
   }

  ngOnInit() {
   this.aggrigateStoreProductsSum();
  }

  aggrigateStoreProductsSum(): void{
    const storesArr = [];
    const filterProductList =this.isRecived ? this.productsList.filter(product=> product.isRecieved) :this.productsList.filter(product=> !product.isRecieved)
    let group = filterProductList.reduce((r, a) => {
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