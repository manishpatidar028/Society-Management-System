import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintRaiseComponent } from './complaint-raise.component';

describe('ComplaintRaiseComponent', () => {
  let component: ComplaintRaiseComponent;
  let fixture: ComponentFixture<ComplaintRaiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintRaiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintRaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
