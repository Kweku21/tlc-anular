import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class BalanceService  {

  clientBalance: Number; 

  constructor( private http: HttpClient) { }


  public getbalance(): any {
    return 50;
    // return localStorage.getItem("clientBalance")
  }

  // public getClientBalance(client: Client): Observable<Number>{
  //   return this.http.get<Number>(`${this.Url}/clientId/${client.name}`);
  // }
  
}


