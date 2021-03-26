import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {DataService} from '../../services/data.service';
import {Client} from '../../model/data/Client';
import {Portfolio} from '../../model/data/Portfolio';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Message} from '../../model/response/Message';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public client: Client;
  public portfolio: Portfolio;
  public portfolios: Portfolio[];


  constructor(
    private route: Router,
    private portfolioService: PortfolioService,
    private data: DataService,
  ) { }

  ngOnInit(): void {

    this.checkAuthClient();

  }

  public checkAuthClient(): void{
    this.data.currentClient.subscribe(client => this.client = client);
    if (this.client == null){

      const responseMessage = {
        message: 'Login to continue',
        status: 'danger'
      };
      this.data.setMessage(responseMessage);

      this.route.navigate(['/login']).then(r => console.log(r));
    }else{
      this.getAllPortfoliosByClient(this.client);
    }
  }

  public getAllPortfoliosByClient(client: Client): void{
    // @ts-ignore
    this.portfolioService.getAllClientPortfolios(client).subscribe(

      (response: Portfolio[]) => {
        this.portfolios = response;
        console.log(response);
      },
      (error => {
        alert('Unable to get all portfolios');
      })
    );
  }

  public getPortfolioById(portfolioId: number): void{
     this.portfolioService.getPortfolioById(portfolioId).subscribe(
       (response: Portfolio) => {
         this.portfolio = response;
       },
       (error => {
         alert('Unable to get portfolio with id ' + portfolioId);
       })
     );
  }

  public addPortfolio(portfolioForm: NgForm): void{
    this.portfolioService.postPortfolio(portfolioForm.value, this.client).subscribe(
      (response: Portfolio) => {
        this.portfolios.push(response);
      },
      (error => {
        alert('Unable to create portfolio');
      })
    );
  }

  public deletePortfolioById(portfolioId: number): void{
    this.portfolioService.deletePortfolioById(portfolioId).subscribe(
      () => {
        alert('Successfully deleted portfolio');
      },
      (error => {
        alert('Unable to delete portfolio');
      })
    );
  }


}
