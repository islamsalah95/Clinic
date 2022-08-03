import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSinglePatientComponent } from './get-single-patient.component';

describe('GetSinglePatientComponent', () => {
  let component: GetSinglePatientComponent;
  let fixture: ComponentFixture<GetSinglePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSinglePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSinglePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
