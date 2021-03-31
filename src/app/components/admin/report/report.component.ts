import { Component, OnInit } from '@angular/core';
import {ReportService} from 'src/app/services/report.service';
import {Report} from 'src/app/model/admin/Report';
import {ReportDisplay} from '../../../model/admin/ReportDisplay';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public reports: Report[];
  public displayReports: ReportDisplay[]  = [];

  constructor(
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.getAllReport();
  }

  public processReports(reports: Report[]): void{
    // console.log(reports[0].message);
    reports.forEach( report => {
      const firstBracket = report.message.indexOf('{');
      const lastBracket = report.message.indexOf('}');
      const data = report.message.substr(firstBracket, lastBracket);
      const dataType = report.message.substr(0, firstBracket);
      const message = report.message.substr(lastBracket + 1, reports[0].message.length);

      const displayReport = new ReportDisplay(reports[0].id, dataType, data, message);
      // console.log(displayReport);
      this.displayReports.push(displayReport);
    });
  }

  public getAllReport(): void{
    this.reportService.getReports().subscribe(
      (response: Report[]) => {
        this.reports = response;
        this.processReports(this.reports);
        // console.log(response);
      },
      (error => {
        console.log(error.message);
        alert('Unable to get all report');
      })
    );
  }

}
