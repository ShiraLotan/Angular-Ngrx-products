import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/app.interface';
import { AppService } from 'src/services/appservice.service';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  priceChoosen: boolean = true;
  @Input() currencyCurrent: Observable<number>;
  @Input() product: Product;
  @Output() receive = new EventEmitter();

  constructor( private appService: AppService) { }

  ngOnInit() {
  
  }

  handleproductIdemit(id) {
    this.receive.emit(id)
  }
}
