import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/data/Client';
import {Observable} from 'rxjs';
import {Portfolio} from '../model/data/Portfolio';
import {Product} from '../model/data/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = 'https://tradeenginedb.herokuapp.com/api/v1/product';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllPortfolioProducts(portfolio: Portfolio): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiBaseUrl}/portfolioId/${portfolio.portfolioId}`);
  }
}
