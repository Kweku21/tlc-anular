import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientTradesComponent } from './admin-client-trades.component';

describe('AdminClientTradesComponent', () => {
  let component: AdminClientTradesComponent;
  let fixture: ComponentFixture<AdminClientTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClientTradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
