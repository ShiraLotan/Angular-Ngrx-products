import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList } from "../state/app.actions";
import * as moment from "moment";
import { Router } from '@angular/router';
import { AppService } from 'src/services/appservice.service';

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  countId: number;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  addProductForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('Headphones', [Validators.required]),
    storeName: new FormControl('Amazon', [Validators.required]),
    price: new FormControl('120', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    deliveryDate: new FormControl('12/6/2021', [this.dateValidator()]),
  });
  constructor(private store: Store<AppState>, private router: Router,private appService:AppService ) { }

  ngOnInit() {
   this.countId = this.appService.getCounterState()
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.addProductForm.valid) {
      this.addProductForm.value.id = this.countId;
      console.log(this.addProductForm.value)
      this.addProductForm.value.isRecieved = false;
      this.store.dispatch(addProductToList(this.addProductForm.value));
      this.appService.setCounterState();
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
