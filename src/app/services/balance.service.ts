import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../services/data.service';


@Injectable({
  providedIn: 'root'
})

export class BalanceService  {

  clientBalance: Number; 

  constructor( private http: HttpClient, private data: DataService,) { }


  public getbalance(): Number {
    return this.data.getClient().balance
  }

  // public getClientBalance(client: Client): Observable<Number>{
  //   return this.http.get<Number>(`${this.Url}/clientId/${client.name}`);
  // }
  
}


