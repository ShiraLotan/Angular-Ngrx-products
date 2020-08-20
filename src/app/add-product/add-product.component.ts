import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList } from "../state/app.actions";
import { selectProductList } from "../state/product.reducer";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  addProductForm = new FormGroup({
    id: new FormControl(1),
    productName: new FormControl("gdfg"),
    storeName: new FormControl("gdfgd"),
    price: new FormControl(32),
    delivery: new FormControl(32),
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
  addProduct() {
    debugger;
    this.store.dispatch(addProductToList(this.addProductForm.value));
  }
}
