import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientOrder} from '../../model/client-order';
import {Client} from '../../model/data/Client';

@Injectable({
  providedIn: 'root'
})
export class TadesService {

  constructor(
    private http: HttpClient,
  ) { }

  public searchTradeByClient(client: Client): Observable<ClientOrder[]>{
    return this.http.get<ClientOrder[]>('https://tradeenginedb.herokuapp.com/api/v1/clientorder/clientid/' + client.clientId);
  }

  public getClientByEmail(email: string): Observable<Client>{

    return this.http.get<Client>('https://tradeenginedb.herokuapp.com/api/v1/client/email/' + email);
  }
}
