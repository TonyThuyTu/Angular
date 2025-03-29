import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
