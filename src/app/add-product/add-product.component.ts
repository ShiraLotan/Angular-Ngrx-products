import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList } from "../state/app.actions";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  countId: number = 1;
  addProductForm = new FormGroup({
    id: new FormControl(1),
    productName: new FormControl("gdfg"),
    storeName: new FormControl("gdfgd"),
    price: new FormControl(32),
    delivery: new FormControl(32),
  });
  constructor(private store: Store<AppState>) { }

  ngOnInit() { }
  addProduct() {
    this.addProductForm.value.id = this.countId;
    console.log(this.addProductForm.value)
    this.store.dispatch(addProductToList(this.addProductForm.value));
    this.countId++;
  }
}
