import { Component, OnInit } from '@angular/core';
import {Portfolio} from '../../model/data/Portfolio';
import { Router, ActivatedRoute } from '@angular/router';
import {PortfolioService} from '../../services/portfolio.service';
import {Product} from '../../model/data/Product';
import {ProductService} from '../../services/product.service';
import {DataService} from '../../services/data.service';
import {Client} from '../../model/data/Client';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private portfolio: Portfolio;
  public products: Product[];
  private portfolioId: number;
  sub;
  private client: Client;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private portfolioService: PortfolioService,
              private productService: ProductService,
              private data: DataService,
              ){
  }

  ngOnInit(): void{

    this.activatedRoute.paramMap.subscribe(params => {
      this.portfolioId = Number(params.get('id'));
      this.portfolioService.getPortfolioById(this.portfolioId).subscribe(
        (response: Portfolio) => {
          this.portfolio = response;
          console.log(response);
        },
        (error => {
          console.log(error.message);
          alert('Unable to get portfolio with id ' + this.portfolioId);
        })
      );
    });


  }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  public checkAuthClient(): void{
    this.client = this.data.getClient();
    if (this.client == null){

      const responseMessage = {
        message: 'Login to continue',
        status: 'danger'
      };
      this.data.setMessage(responseMessage);

      this.router.navigate(['/login']).then(r => console.log(r));
    }else{
      this.getAllProductsByPortfolio(this.portfolio);
    }
  }

  public getAllProductsByPortfolio(portfolio: Portfolio): void{
    this.productService.getAllPortfolioProducts(portfolio).subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(response);
      },
      (error => {
        console.log(error.message);
        alert('Unable to get all products for ' + portfolio.name);
      })
    );
  }

  onBack(): void {
    this.router.navigate(['portfolio']).then(r => console.log(r));
  }



}
