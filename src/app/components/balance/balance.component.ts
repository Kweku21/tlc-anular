import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../model/Client';
import { BalanceService } from '../../services/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  client: Client;

  constructor( private balanceService: BalanceService) {}


  ngOnInit(): void {

    this.client.balance = this.balanceService.getBalance();

  }

}
