import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzYesNoComponent } from './ez-yes-no.component';

describe('EzYesNoComponent', () => {
  let component: EzYesNoComponent;
  let fixture: ComponentFixture<EzYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzYesNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
