import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketDataComponent } from './components/market-data/market-data.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PlaceOrderComponent,
    MarketDataComponent,
    TradeHistoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
