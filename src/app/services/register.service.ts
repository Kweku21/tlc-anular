import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {RegisterRequest} from '../model/RegisterRequest';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiBaseUrl = 'https://clientconnection.herokuapp.com/api/client';

  constructor(private http: HttpClient) { }

  public registerClient(registerRequest: RegisterRequest): Observable<any>{

    return this.http.post<any>(`${this.apiBaseUrl}/register`, registerRequest);
  }
}
