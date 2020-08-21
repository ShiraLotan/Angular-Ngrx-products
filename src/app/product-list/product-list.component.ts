import { Component, OnInit } from "@angular/core";
import { Product, AppState } from "../interface/app.interface";
import { Store, select} from "@ngrx/store";
import { Observable } from "rxjs";
import { selectProductList } from '../state/selectors';
import { updateReceivedProduct } from '../state/app.actions';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  productList: Observable<AppState>;
 
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.productList = this.store.pipe(select(selectProductList))
  }

  handleReceived(id) {
    this.store.dispatch(updateReceivedProduct({id: id}))
  }
}
