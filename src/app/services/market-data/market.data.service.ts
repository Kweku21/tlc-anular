import { Injectable } from '@angular/core';
import { forkJoin, timer, Observable, Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MarketData } from '../../model/marketdata';
import { takeUntil, retry, share, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class MarketDataService {
    exchangeOneUrl = 'https://exchange.matraining.com/md'
    exchangeTwoUrl = 'https://exchange2.matraining.com/md'

    private marketData: Observable<MarketData[]>
    private stopPolling = new Subject();

    constructor(private http: HttpClient) {
         timer(1, 3000).pipe(
            switchMap(() => this.getExchangeOneData()),
            retry(),
            share(),
            takeUntil(this.stopPolling)
        )

        timer(1, 3000).pipe(
            switchMap(() => this.getExchangeTwoData()),
            retry(),
            share(),
            takeUntil(this.stopPolling)
        )
    }

    getExchangeOneData() {
        return this.http.get<MarketData[]>(this.exchangeOneUrl);
    }

    getExchangeTwoData(){
        return this.http.get<MarketData[]>(this.exchangeTwoUrl);
    }
}