import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/Client';
import {LoginRequest} from '../model/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBaseUrl = 'http://localhost:8050';

  constructor(private http: HttpClient) { }

  public loginClient(loginRequest: LoginRequest): Observable<Client>{

    return this.http.post<Client>(`${this.apiBaseUrl}/client/login`, loginRequest);
  }
}
