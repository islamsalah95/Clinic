import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyAppointmentDRComponent } from './get-my-appointment-dr.component';

describe('GetMyAppointmentDRComponent', () => {
  let component: GetMyAppointmentDRComponent;
  let fixture: ComponentFixture<GetMyAppointmentDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyAppointmentDRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMyAppointmentDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
