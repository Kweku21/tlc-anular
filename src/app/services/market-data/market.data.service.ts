import { Injectable } from '@angular/core';
import { forkJoin, timer, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketData } from '../../model/marketdata';
import { takeUntil, retry, share, switchMap } from 'rxjs/operators';

@Injectable()
export class MarketDataService {
    exchangeOneUrl = 'https://exchange.matraining.com/md'
    exchangeTwoUrl = 'https://exchange2.matraining.com/md'

    private marketData: Observable<MarketData[]>
    private stopPolling = new Subject();

    constructor(private http: HttpClient) {
        timer(1, 3000).pipe(
            switchMap(() => this.getMarketData()),
            retry(),
            share(),
            takeUntil(this.stopPolling)
        )
    }

    getMarketData() {
        return forkJoin<MarketData[], MarketData[]>(
            this.http.get(this.exchangeOneUrl),
            this.http.get(this.exchangeTwoUrl)
        );
    }
}