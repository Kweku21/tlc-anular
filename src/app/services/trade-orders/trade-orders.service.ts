import { Injectable } from '@angular/core';
import { ClientOrder } from '../../model/client-order'
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeOrdersService {

  baseurl = 'https://clientconnection.herokuapp.com/api/order/client'

  constructor(private http : HttpClient) { }

  GetClientOrders(): Observable<ClientOrder[]>{
    return this.http.get<ClientOrder[]>(this.baseurl+'/'+1);
  }

}
