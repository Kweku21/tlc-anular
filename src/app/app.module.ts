import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BalanceComponent } from './components/balance/balance.component';

=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BodyComponent } from './components/body/body.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProductComponent } from './components/product/product.component';
>>>>>>> debrah

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
<<<<<<< HEAD
    NavbarComponent,
    BalanceComponent,
=======
    RegisterFormComponent,
    BodyComponent,
    PortfolioComponent,
    ProductComponent
>>>>>>> debrah
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
