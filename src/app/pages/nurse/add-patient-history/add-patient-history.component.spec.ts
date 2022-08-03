import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientHistoryComponent } from './add-patient-history.component';

describe('AddPatientHistoryComponent', () => {
  let component: AddPatientHistoryComponent;
  let fixture: ComponentFixture<AddPatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
