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
  productsList$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  //  this.store.pipe(select("appState"))
  }

  handleReceived(id) {
    //Handle click on received product
  }
}
