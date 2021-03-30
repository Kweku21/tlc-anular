import { TestBed } from '@angular/core/testing';

import { TradeOrdersService } from './trade-orders.service';

describe('TradeOrdersService', () => {
  let service: TradeOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
