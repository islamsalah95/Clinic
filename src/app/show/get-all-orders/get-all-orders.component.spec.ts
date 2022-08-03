import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOrdersComponent } from './get-all-orders.component';

describe('GetAllOrdersComponent', () => {
  let component: GetAllOrdersComponent;
  let fixture: ComponentFixture<GetAllOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
