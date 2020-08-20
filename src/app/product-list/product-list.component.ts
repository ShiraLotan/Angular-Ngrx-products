import { Component, OnInit } from "@angular/core";
import { Product, AppState } from "../interface/app.interface";
import { Store, select } from "@ngrx/store";
import { selectProductList } from "../state/product.reducer";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  productsList: Product[] = [
    {
      id: 1,
      name: "computer",
      storeName: "Amazon",
      price: 100,
      isRecieved: false,
      deliveryDate: 15 / 8 / 2020,
    },
    {
      id: 2,
      name: "computer",
      storeName: "Amazon",
      price: 100,
      isRecieved: false,
      deliveryDate: 15 / 8 / 2020,
    },
    {
      id: 3,
      name: "computer",
      storeName: "Amazon",
      price: 100,
      isRecieved: false,
      deliveryDate: 15 / 8 / 2020,
    },
  ];
  constructor(private store: Store<Product>) {}

  ngOnInit() {
  //   this.store.pipe(select(selectProductList)).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  }

  handleReceived(id){
    //Handle click on received product
  }
}
