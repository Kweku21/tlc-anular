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

  // public getBalance(): any{
  //   return [
  //     {
  //       clientId: 2,
  //       name: 'Kwesi',
  //       email: 'ice@gmail.com',
  //       balance: 50
  //     }
  //   ];
  // }

  public getBalance(): any {
    return 50;
  }

  public getClientBalance(client: Client): Observable<any>{
    return this.http.get<any>(`${this.Url}/clientId/${client.name}`);
  }

}


