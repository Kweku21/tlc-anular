import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/Client';
import {LoginRequest} from '../model/LoginRequest';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBaseUrl = 'https://clientconnection.herokuapp.com/api/client';

  constructor(private http: HttpClient) { }

  public loginClient(loginRequest: LoginRequest): Observable<Client>{

    return this.http.post<Client>(`${this.apiBaseUrl}/login`, loginRequest);
  }

  public getClients(): Observable<Client[]> {

    return this.http.get<any>(`${this.apiBaseUrl}/all`);

  }
}
