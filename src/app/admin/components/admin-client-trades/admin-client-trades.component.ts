import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ClientOrder} from '../../../domain/client-order';

@Component({
  selector: 'app-admin-client-trades',
  templateUrl: './admin-client-trades.component.html',
  styleUrls: ['./admin-client-trades.component.css']
})
export class AdminClientTradesComponent implements OnInit {
  filter = new FormControl('');
  clientorders: ClientOrder[];

  constructor() { }

  ngOnInit(): void {
  }

}
