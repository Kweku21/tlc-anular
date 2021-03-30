import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  orderForm: FormGroup;
  hasSent: boolean;

  constructor(public orderService: OrderService) { }

  ngOnInit(){
    this.orderForm = new FormGroup({
      product: new FormControl(""),
      price: new FormControl(""),
      quantity: new FormControl(""),
      side: new FormControl(""),
      portfolio: new FormControl(""),
      clientId: new FormControl("")
    }) 
  }

  submitOrder(form: FormGroup){
    form.patchValue({
      "clientId" : 2
    })
    console.log(form.value)
    
    this.orderService.placeOrder(form.value);
  }

}
