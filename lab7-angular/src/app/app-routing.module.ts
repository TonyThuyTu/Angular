import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), title: 'Home' },
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), title: 'Products' }, 

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), title: 'User' },

  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
