import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../../model/requests/LoginRequest';
import {Observable} from 'rxjs';
import {Client} from '../../model/data/Client';
import {User} from '../../model/admin/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBaseUrl = 'https://tradeenginedb.herokuapp.com/api/admin';


  constructor(
    private http: HttpClient,
  ) { }

  public loginAdmin(loginRequest: LoginRequest): Observable<User>{

    return this.http.post<User>(`${this.apiBaseUrl}/login`, loginRequest);
  }
}