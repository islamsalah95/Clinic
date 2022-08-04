import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpatientComponent } from './allpatient.component';

describe('AllpatientComponent', () => {
  let component: AllpatientComponent;
  let fixture: ComponentFixture<AllpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
