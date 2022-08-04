import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStufComponent } from './register-stuf.component';

describe('RegisterStufComponent', () => {
  let component: RegisterStufComponent;
  let fixture: ComponentFixture<RegisterStufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStufComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
