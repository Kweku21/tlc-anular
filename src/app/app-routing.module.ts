import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketDataService } from './services/market-data/market.data.service';
import { OrderService } from './services/order/order.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [OrderService, MarketDataService]
})
export class AppRoutingModule { }
