import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSinglePatientHistoryComponent } from './get-single-patient-history.component';

describe('GetSinglePatientHistoryComponent', () => {
  let component: GetSinglePatientHistoryComponent;
  let fixture: ComponentFixture<GetSinglePatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSinglePatientHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSinglePatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
