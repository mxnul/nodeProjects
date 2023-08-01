import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeescrudComponent } from './employeescrud.component';

describe('EmployeescrudComponent', () => {
  let component: EmployeescrudComponent;
  let fixture: ComponentFixture<EmployeescrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeescrudComponent]
    });
    fixture = TestBed.createComponent(EmployeescrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
