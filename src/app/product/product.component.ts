import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interface/app.interface';
import { Observable, timer } from 'rxjs';

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

  constructor() { }

  ngOnInit() {
  }

  handleproductIdemit(id: number): void {
    this.receive.emit(id)
  }
}
