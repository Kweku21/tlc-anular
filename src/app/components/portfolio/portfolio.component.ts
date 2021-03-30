import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {DataService} from '../../services/data.service';
import {Client} from '../../model/data/Client';
import {Portfolio} from '../../model/data/Portfolio';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {PortfolioRequest} from '../../model/requests/PortfolioRequest';

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
    this.client = this.data.getClient();
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
        // console.log(response);
      },
      (error => {
        console.log(error.message);
        alert('Unable to get all portfolios');
      })
    );
  }

  public getPortfolioById(portfolioId: number): void{
     this.portfolioService.getPortfolioById(portfolioId).subscribe(
       (response: Portfolio) => {
         this.portfolio = response;
         // console.log(response);
       },
       (error => {
         alert('Unable to get portfolio with id ' + portfolioId);
       })
     );

  }

  public addPortfolio(portfolioForm: NgForm): void{

    // console.log(portfolioForm.value);
    const portfolioRequest = new PortfolioRequest(portfolioForm.value.name, this.client.clientId);
    this.portfolioService.postPortfolio(portfolioRequest).subscribe(
      (response: any) => {
        // @ts-ignore
        this.getAllPortfoliosByClient(this.client);
        // console.log(response);
        // this.portfolios.push(response);
      },
      (error => {
        console.log(error.message);
        // alert('Unable to create portfolio');
      })
    );
    portfolioForm.resetForm();
    document.getElementById('add-portfolio-form').click();
  }

  public deletePortfolio(portfolio: Portfolio): void{

    if (!confirm('Are you sure you wan to delete ' + portfolio.name)){
      return;
    }
    // console.log('now here');
    this.portfolioService.deletePortfolioById(portfolio.portfolioId).subscribe(
      () => {
        // this.removeFromList(portfolio);
        this.getAllPortfoliosByClient(this.client);
        alert('Successfully deleted portfolio');
      },
      (error => {
        console.log(error.message);
        alert('Unable to delete portfolio');
      })
    );
  }

  public removeFromList(portfolio: Portfolio): void{
    // @ts-ignore
    this.portfolios = this.portfolios.filter(portfolioId => portfolioId !== portfolio.portfolioId );
  }


}
