import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNationalIdComponent } from './add-national-id.component';

describe('AddNationalIdComponent', () => {
  let component: AddNationalIdComponent;
  let fixture: ComponentFixture<AddNationalIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNationalIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNationalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
