import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { HelloAngularComponent } from "./hello-angular/hello-angular.component";
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HelloAngularComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
