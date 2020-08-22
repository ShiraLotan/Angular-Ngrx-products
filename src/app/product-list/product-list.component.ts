import { Component, OnInit, OnDestroy } from "@angular/core";
import { Product, AppState } from "../interface/app.interface";
import { Store, select} from "@ngrx/store";
import { Observable, timer, Subscription } from "rxjs";
import { selectProductList } from '../state/selectors';
import { updateReceivedProduct } from '../state/product.actions';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/services/prodctService.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList$: Observable<AppState>;
  currencyCurrent: Observable<number>;
  subscription: Subscription;

  constructor(private store: Store<AppState>, private productService: ProductService) {}

  ngOnInit() {
    this.productList$ = this.store.pipe(select(selectProductList))
    this.getCurrencyRate();
  }

  getCurrencyRate(): void{
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.productService.getCurrency())
    ).subscribe(res =>{
      this.currencyCurrent = res.rates.ILS
    } );
  }
  handleReceived(id: number): void {
    this.store.dispatch(updateReceivedProduct({id: id}))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
