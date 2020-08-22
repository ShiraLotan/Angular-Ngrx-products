import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { StoreModule } from "@ngrx/store";
import { stateReducer } from "./state/product.reducer";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { StoreListComponent } from "./store-list/store-list.component";
import { ReceivedListComponent } from "./received-list/received-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from '@angular/material/radio';
import { CustomePipe } from './pipes/custom.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    ProductListComponent,
    StoreListComponent,
    ReceivedListComponent,
    CustomePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ state: stateReducer }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTabsModule, MatButtonModule, MatInputModule, MatMenuModule, MatRadioModule, MatDatepickerModule],
})
export class AppModule { }
