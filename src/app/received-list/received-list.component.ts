import { Component, OnInit } from '@angular/core';
import { AppState } from '../interface/app.interface';
import { Store, select } from '@ngrx/store';
import { selectProductList } from '../state/selectors';
import { Observable } from 'rxjs';
import { ProductService } from 'src/services/prodctService.service';

@Component({
  selector: 'app-received-list',
  templateUrl: './received-list.component.html',
  styleUrls: ['./received-list.component.scss']
})
export class ReceivedListComponent implements OnInit {
  recievedList$: Observable<AppState>;
  currenctCurrency:Observable <any>;

  constructor(private store: Store<AppState>,private productsService: ProductService) { }

  ngOnInit() {
   this.recievedList$ = this.store.pipe(select(selectProductList))
   this.productsService.getCurrency().subscribe(res=>{
    this.currenctCurrency = res.rates.ILS
   });
  }

}
