import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PortfolioRequest} from '../model/requests/PortfolioRequest';
import {Portfolio} from '../model/data/Portfolio';
import {Client} from '../model/data/Client';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiBaseUrl = 'https://clientconnection.herokuapp.com/api/portfolio';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllClientPortfolios(client: Client): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(`${this.apiBaseUrl}/all/?client_id=${client.clientId}`);
  }

  public postPortfolio(portfolioRequest: PortfolioRequest, client: Client): Observable<Portfolio>{

    return this.http.post<Portfolio>(`${this.apiBaseUrl}/add/?client_id=${client.clientId}`, portfolioRequest);
  }

  public getPortfolioById(portfolioId: number): Observable<Portfolio>{
    return this.http.get<Portfolio>(`${portfolioId}`);
  }

  public deletePortfolioById(portfolioId: number): Observable<any>{
    return this.http.delete<any>(`${this.apiBaseUrl}/delete/${portfolioId}`);
  }
}
