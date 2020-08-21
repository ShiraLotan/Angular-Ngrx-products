import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../interface/app.interface';
import { AppService } from 'src/services/appservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  priceChoosen: boolean = true;
  currencyCurrent: Observable <number>;
  symbol: string = this.priceChoosen ? 'ILS' : 'USD';
  @Input() product: Product;
  @Output() receive = new EventEmitter();

  constructor(private store: Store<any>, private appService : AppService) { }

  ngOnInit() {
    this.appService.getCurrency().subscribe(res=>{
      this.currencyCurrent = res.rates.ILS
    })
  }
  handleproductIdemit(id) {
    this.receive.emit(id)
  }
}
