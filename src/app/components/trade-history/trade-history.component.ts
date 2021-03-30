import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientOrder} from '../../domain/client-order';
import { TradeOrdersService } from '../../services/trade-orders/trade-orders.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'trade-history',
  templateUrl: './trade-history.component.html',
  providers: [DecimalPipe]
})
export class TradeHistoryComponent {

  clientorders$: Observable<ClientOrder[]>;
  filter = new FormControl('');

  clientorders : ClientOrder[] = [];
  constructor(pipe: DecimalPipe, public tradeservice: TradeOrdersService) {
    this.clientorders$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.loadClientOrders();
  }

  loadClientOrders(){
    this.tradeservice.GetClientOrders().subscribe((data:any) => {
      this.clientorders = data
    })
  }

  tradefromclient(){
    for (let index = 0; index < this.clientorders.length; index++) {
    }
  }

   search(text: string, pipe: PipeTransform): ClientOrder[] {
    return this.clientorders.filter(clientorder => {
      const term = text.toLowerCase();
      return clientorder.product.toLowerCase().includes(term)
            || clientorder.side.toLocaleLowerCase().includes(term)
            || clientorder.status.toLocaleLowerCase().includes(term)
            || pipe.transform(clientorder.portfolioId).includes(term);
    });
  }
}
