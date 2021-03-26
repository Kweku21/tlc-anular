import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class OrderService {
    //baseUrl = "https://clientconnection.herokuapp.com/api/order/sendOrder"
    baseUrl = "/"
    errorMessage: string;
    constructor( private http: HttpClient ) { }
    
    placeOrder(formData) {
        this.http.post<any>(this.baseUrl, formData)
        .subscribe({
            next: data => {
                console.log(data)
            },
            error: error => {
                this.errorMessage = error.message;
                console.error("whoops!");
            }
        })
    }
}