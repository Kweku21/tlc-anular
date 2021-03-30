import { Component, OnInit } from '@angular/core';
import { MarketDataService } from 'src/app/services/market-data/market.data.service';
import { MarketData } from 'src/app/model/marketdata';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  ex1: MarketData[];
  ex2: MarketData[];

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
