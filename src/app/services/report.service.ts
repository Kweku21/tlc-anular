import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from 'src/app/model/data/Client';
import {HttpClient} from '@angular/common/http';
import {Report} from 'src/app/model/admin/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiBaseUrl = 'https://tradeenginedb.herokuapp.com/report';

  constructor(
    private http: HttpClient,
  ) { }

  public getReports(): Observable<Report[]> {

    return this.http.get<any>(`${this.apiBaseUrl}/all`);

  }
}
