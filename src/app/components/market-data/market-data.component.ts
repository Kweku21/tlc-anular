import { Component, OnInit } from '@angular/core';
import { MarketDataService } from 'src/app/services/market-data/market.data.service';
import { MarketData } from 'src/app/model/marketdata';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  errorLoadingOne: boolean = false;
  errorLoadingTwo: boolean = false;

  ex1: MarketData[];
  ex2: MarketData[];

  constructor(public marketDataService: MarketDataService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.marketDataService.getExchangeOneData().subscribe(
      data => {
        this.ex1 = data
      }, (error => {
        console.error(error)
        this.errorLoadingOne = true;
      })
    );

    this.marketDataService.getExchangeTwoData().subscribe(
      data => {
        this.ex2 = data
      }, (error => {
        console.error(error)
        this.errorLoadingTwo = true;
      })
    )
  }

}
