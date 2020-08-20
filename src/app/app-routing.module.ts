import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReceivedListComponent } from './received-list/received-list.component';

const routes: Routes = [
  { path: "", component: AddProductComponent, pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "received", component: ReceivedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
