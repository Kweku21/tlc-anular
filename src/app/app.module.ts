import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketDataComponent } from './components/market-data/market-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PlaceOrderComponent,
    MarketDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
