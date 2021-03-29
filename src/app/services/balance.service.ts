import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../model/Client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BalanceService {

  private Url = 'https://tradeenginedb.herokuapp.com/api/v1/client/baal';
  constructor( private http: HttpClient) { }

  getBalance(){
    return [
      {
        clientId: 2,
        name: 'Kwesi',
        email: "ice@gmail.com",
        balance: 50
      }
    ];
  }

  getbalance() {
    return 50;
  }

  public getClientBalance(client: Client): Observable<Number>{
    return this.http.get<Number>(`${this.Url}/clientId/${client.name}`);
  }
  
}


