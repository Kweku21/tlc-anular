import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/app/model/data/Client';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Portfolio } from 'src/app/model/data/Portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  providers: [PortfolioComponent],
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  orderForm: FormGroup;
  hasSent: boolean;
  client: Client;
  clientId: number;
  portfolioList: Array<number>;
  portfolioMap: Map<string, number> = new Map();

  constructor(public orderService: OrderService, 
    public portfolio: PortfolioComponent, 
    public portfolioService: PortfolioService,
    public dataService: DataService) { }

  ngOnInit(){
    this.setup()
  }

  setup(){
    this.orderForm = new FormGroup({
      product: new FormControl(""),
      price: new FormControl(""),
      quantity: new FormControl(""),
      side: new FormControl(""),
      portfolio: new FormControl(""),
      clientId: new FormControl("")
    }) 
    this.client = this.dataService.getClient()
    this.clientId = this.client.clientId

    this.portfolioList = this.client.portfolios
    this.getNames(this.portfolioList)
    // this.names = Array.from(this.portfolioMap.keys())
  }

  getNames(portfolioList: Array<number>){
    for (const id of portfolioList){
      this.portfolioService.getPortfolioNames(id).subscribe(
        (response) => {
          this.portfolioMap.set(response.name, id)
        },
        (error => {
          console.log(error.message);
        })
        
      );
    }
  }

  submitOrder(form: FormGroup){
    form.patchValue({
      "clientId" : this.clientId
    })
    console.log(form.value)

    // this.orderService.placeOrder(form.value);
  }

}
