import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {BodyComponent} from './components/body/body.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProductComponent} from './components/product/product.component';
import { MarketDataService } from './services/market-data/market.data.service';
import { OrderService } from './services/order/order.service';
import {AdminLoginComponent} from './admin/components/admin-login/admin-login.component';
import {AdminHomeComponent} from './admin/components/admin-home/admin-home.component';
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
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/login', component: AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderService, MarketDataService]
})
export class AppRoutingModule { }
