import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BodyComponent } from './components/body/body.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProductComponent } from './components/product/product.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BalanceComponent } from './components/balance/balance.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MarketDataComponent } from './components/market-data/market-data.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { ReportComponent } from './components/admin/report/report.component';
import { AdminClientTradesComponent } from './components/admin/admin-client-trades/admin-client-trades.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BodyComponent,
    PortfolioComponent,
    ProductComponent,
    NavbarComponent,
    BalanceComponent,
    PlaceOrderComponent,
    MarketDataComponent,
    TradeHistoryComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminClientTradesComponent,
    ReportComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
