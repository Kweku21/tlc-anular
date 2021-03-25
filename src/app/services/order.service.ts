import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class OrderService {
    postId: number;
    errorMessage: string;
    constructor( private http: HttpClient ) { }
    
    placeOrder() {
        this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: "Sample post"})
        .subscribe({
            next: data => {
                this.postId = data.id;
            },
            error: error => {
                this.errorMessage = error.message;
                console.error("whoops!");
            }
    })
    }
}