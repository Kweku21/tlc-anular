import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(){}

  submitOrder(form: NgForm){
    this.orderService.placeOrder(form.value);
  }

}
