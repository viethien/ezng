import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzPasswordComponent } from './ez-password.component';

describe('EzPasswordComponent', () => {
  let component: EzPasswordComponent;
  let fixture: ComponentFixture<EzPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
