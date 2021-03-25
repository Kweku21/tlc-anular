import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderService } from './services/order.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderService]
})
export class AppRoutingModule { }
