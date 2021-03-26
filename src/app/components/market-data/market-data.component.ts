import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/domain/order';
import { map } from 'rxjs/operators';
import { MarketDataService } from 'src/app/services/market.data.service';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  ex1;
  ex2;

  constructor(public marketDataService: MarketDataService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.marketDataService.getMarketData().subscribe(
      data => {
        // can use map here if decomposing into object?
        this.ex1 = data[0]
        this.ex2 = data[1]
      }
    );
  }

}
