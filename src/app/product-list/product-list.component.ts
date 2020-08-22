import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product, AppState } from "../interface/app.interface";
import { Store, select} from "@ngrx/store";
import { Observable, timer, Subscription } from "rxjs";
import { selectProductList } from '../state/selectors';
import { updateReceivedProduct } from '../state/app.actions';
import { switchMap } from 'rxjs/operators';
import { AppService } from 'src/services/appservice.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: Observable<AppState>;
  currencyCurrent: Observable<number>;
  subscription: Subscription;

  constructor(private store: Store<AppState>, private appService: AppService) {}

  ngOnInit() {
    this.productList = this.store.pipe(select(selectProductList))

   this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.appService.getCurrency())
    ).subscribe(res =>{
      this.currencyCurrent = res.rates.ILS
    } );
  }

  handleReceived(id) {
    this.store.dispatch(updateReceivedProduct({id: id}))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
