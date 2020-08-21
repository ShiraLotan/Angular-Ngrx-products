import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList } from "../state/app.actions";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  picker
  countId: number = 1;
  addProductForm = new FormGroup({
    id: new FormControl(''),
    productName: new FormControl('',[Validators.required]),
    storeName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    delivery: new FormControl(32),
  });
  constructor(private store: Store<AppState>) { }

  ngOnInit() { }
  onSubmit() {
    this.addProductForm.value.id = this.countId;
    this.addProductForm.value.isRecieved = false;
    this.store.dispatch(addProductToList(this.addProductForm.value));
    console.log(this.addProductForm.value)
    this.countId++;
  }
}
