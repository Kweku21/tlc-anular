import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(){}

  submitOrder(){
    // form json should be integrated here
    this.orderService.placeOrder();
  }

}
