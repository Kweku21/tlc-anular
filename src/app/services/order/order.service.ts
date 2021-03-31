import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarketDataService } from '../market-data/market.data.service';

@Injectable()
export class OrderService {
    baseUrl = "https://clientconnection.herokuapp.com/api/order/sendOrder"
    errorMessage: string;
    constructor( private http: HttpClient ) { }
    
    placeOrder(values) {
        this.http.post<any>(this.baseUrl, values)
        .subscribe({
            next: data => {
                console.log(data)
            },
            error: error => {
                this.errorMessage = error.message;
                console.log(this.errorMessage)
            }
        })
    }
}