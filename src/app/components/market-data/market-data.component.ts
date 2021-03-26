import { Component, OnInit } from '@angular/core';
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
        console.log(data)
        this.ex1 = data[0]
        this.ex2 = data[1]
      }
    );
  }

}
