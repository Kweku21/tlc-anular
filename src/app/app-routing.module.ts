import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {BodyComponent} from './components/body/body.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'home', component: BodyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/:id/products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
