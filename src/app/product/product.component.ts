import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../interface/app.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() received = new EventEmitter();

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }
  handleproductIdemit(id) {
    this.received.emit(id)
  }
}
