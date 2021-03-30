import { Component, OnInit } from '@angular/core';
import {ReportService} from 'src/app/services/report.service';
import {Report} from 'src/app/model/Report';
import {Portfolio} from '../../../model/data/Portfolio';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public reports: Report[];

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.getAllReport();
  }

  public getAllReport(): void{
    this.reportService.getReports().subscribe(
      (response: Report[]) => {
        this.reports = response;
        console.log(response);
      },
      (error => {
        console.log(error.message);
        alert('Unable to get all report');
      })
    );
  }

}