import { Component, OnInit } from '@angular/core';
import { AppState } from '../interface/app.interface';
import { Store, select } from '@ngrx/store';
import { selectProductList } from '../state/selectors';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/appservice.service';

@Component({
  selector: 'app-received-list',
  templateUrl: './received-list.component.html',
  styleUrls: ['./received-list.component.scss']
})
export class ReceivedListComponent implements OnInit {
  recievedList$: Observable<AppState>;
  currenctCurrency:Observable <any>;

  constructor(private store: Store<AppState>,private appService: AppService) { }

  ngOnInit() {
   this.recievedList$ = this.store.pipe(select(selectProductList))
   this.currenctCurrency = this.appService.getCurrency();
  }

}
