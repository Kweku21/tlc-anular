import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {BodyComponent} from './components/body/body.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProductComponent} from './components/product/product.component';
import { MarketDataService } from './services/market-data/market.data.service';
import { OrderService } from './services/order/order.service';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { ReportComponent } from './components/admin/report/report.component';
import {AdminClientTradesComponent} from './components/admin/admin-client-trades/admin-client-trades.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'home', component: BodyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:id/products', component: ProductComponent },

  /**
   * Admin Routes
   */
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/client-trade', component: AdminClientTradesComponent},
  {path: 'admin/reports', component: ReportComponent},
  {path: 'admin/home', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderService, MarketDataService]
})
export class AppRoutingModule { }
