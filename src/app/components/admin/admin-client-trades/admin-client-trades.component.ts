import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {ClientOrder} from 'src/app/model/client-order';
import { Client } from 'src/app/model/data/Client';
import {TadesService} from '../../../services/admin/tades.service';

@Component({
  selector: 'app-admin-client-trades',
  templateUrl: './admin-client-trades.component.html',
  styleUrls: ['./admin-client-trades.component.css']
})
export class AdminClientTradesComponent implements OnInit {
  clientorders: ClientOrder[];

  constructor(
    private tradeService: TadesService,
  ) { }

  ngOnInit(): void {
  }

  public getClientByEmail(clientTradeForm: NgForm): void{
    this.tradeService.getClientByEmail(clientTradeForm.value.client).subscribe(
      (response: Client) => {
        this.searchClientOrder(response);
      },
      (error => {
        alert('No client with the email' + clientTradeForm.value.client);
        console.log(error.message);
      })
    );
  }

  public searchClientOrder(client): void{

    console.log(client);

    this.tradeService.searchTradeByClient(client).subscribe(
      (response: ClientOrder[]) => {
        this.clientorders = response;
        // console.log(response);
        // tslint:disable-next-line:triple-equals
        if (response.length == 0){
          alert('No trade for client');
        }
      },
      (error => {
        alert('Unable to get trade order by client');
        console.log(error.message);
      })
    );

  }
}
