import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList } from "../state/app.actions";
import * as moment from "moment";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  countId: number = 1;
  addProductForm = new FormGroup({
    id: new FormControl(''),
    productName: new FormControl('', [Validators.required]),
    storeName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    deliveryDate: new FormControl('', [this.dateValidator()]),
  });
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(e) {
    e.preventDefault();
    if (this.addProductForm.valid) {
      this.addProductForm.value.id = this.countId;
      console.log(this.addProductForm.value)
      this.addProductForm.value.isRecieved = false;
      this.store.dispatch(addProductToList(this.addProductForm.value));
      this.countId++;
      this.addProductForm.reset(this.addProductForm)
      this.router.navigate(['/products']);
    }
  }

  dateValidator(format = "MM/dd/YYYY"): any {
    return (control: FormControl): { [key: string]: any } => {
      const val = moment(control.value, format, true);

      if (!val.isValid()) {
        return { invalidDate: true };
      }

      return null;
    };
  }
}
