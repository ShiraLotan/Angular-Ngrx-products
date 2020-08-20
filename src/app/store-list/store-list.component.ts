import { Component, OnInit } from "@angular/core";
import { Product } from '../interface/app.interface';

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrls: ["./store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  storeList: Product[] = [
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
  constructor() {}

  ngOnInit() {}
}
