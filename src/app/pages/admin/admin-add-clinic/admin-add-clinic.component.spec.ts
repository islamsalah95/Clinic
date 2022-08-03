import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddClinicComponent } from './admin-add-clinic.component';

describe('AdminAddClinicComponent', () => {
  let component: AdminAddClinicComponent;
  let fixture: ComponentFixture<AdminAddClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddClinicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
