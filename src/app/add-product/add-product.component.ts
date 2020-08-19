import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm = new FormGroup({
    productName: new FormControl(''),
    storeName: new FormControl(''),
    price: new FormControl(''),
    delivery: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  addProduct(){
    debugger

  }
}
