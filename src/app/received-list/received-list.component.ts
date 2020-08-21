import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/app.interface';

@Component({
  selector: 'app-received-list',
  templateUrl: './received-list.component.html',
  styleUrls: ['./received-list.component.scss']
})
export class ReceivedListComponent implements OnInit {
  receivedList: Product[] = [
    {
      id: 1,
      name: "computer",
      storeName: "Amazon",
      price: 100,
      isRecieved: true,
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
      isRecieved: true,
      deliveryDate: 15 / 8 / 2020,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
