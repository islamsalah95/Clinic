import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDoctorsComponent } from './get-all-doctors.component';

describe('GetAllDoctorsComponent', () => {
  let component: GetAllDoctorsComponent;
  let fixture: ComponentFixture<GetAllDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
