import { Component, OnInit } from "@angular/core";
import { Product, AppState } from "../interface/app.interface";
import { Store, select} from "@ngrx/store";
import { Observable } from "rxjs";

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

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  //  this.store.pipe(select("appState"))
  }

  handleReceived(id) {
    console.log(id)
    //Handle click on received product
  }
}
