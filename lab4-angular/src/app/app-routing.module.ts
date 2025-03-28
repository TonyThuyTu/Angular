import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  
  { path: '', component: ProductsComponent, title: 'Home' },
  { path: 'product/:id', component: ProductDetailsComponent, title: ' Product' },
  { path: '**', component: NotfoundComponent, title: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

