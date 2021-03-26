import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MarketDataService {
    exchangeOneUrl = 'https://exchange.matraining.com/md'
    exchangeTwoUrl = 'https://exchange2.matraining.com/md'

    constructor(private http: HttpClient) { }

    getMarketData() {
        return forkJoin(
            this.http.get(this.exchangeOneUrl),
            this.http.get(this.exchangeTwoUrl)
        );
    }
}