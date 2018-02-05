import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerActionsComponent } from './passenger-actions.component';

describe('PassengerActionsComponent', () => {
  let component: PassengerActionsComponent;
  let fixture: ComponentFixture<PassengerActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
