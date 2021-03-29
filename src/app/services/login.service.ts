import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/data/Client';
import {LoginRequest} from '../model/requests/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBaseUrl = 'https://clientconnection.herokuapp.com/api/client';
  private apiBaseUrl2 = 'https://tradeenginedb.herokuapp.com/api/v1/client';

  constructor(
    private http: HttpClient,

    ) { }

  public loginClient(loginRequest: LoginRequest): Observable<Client>{

    return this.http.post<Client>(`${this.apiBaseUrl2}/login`, loginRequest);
  }

  public getClients(): Observable<Client[]> {

    return this.http.get<any>(`${this.apiBaseUrl2}/all`);

  }
}
