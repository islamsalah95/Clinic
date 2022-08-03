import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClinicsComponent } from './get-all-clinics.component';

describe('GetAllClinicsComponent', () => {
  let component: GetAllClinicsComponent;
  let fixture: ComponentFixture<GetAllClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllClinicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
