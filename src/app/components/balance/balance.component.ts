import { Component, OnInit } from '@angular/core';
import { Client } from "../../model/Client";
import { BalanceService } from '../../services/balance.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {


  clientBalance: Number;

  constructor( private balanceService:BalanceService) {}
  

  ngOnInit(): void {

    this.clientBalance = this.balanceService.getbalance();

  }


}
