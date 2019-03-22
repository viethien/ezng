import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzCheckboxComponent } from './ez-checkbox.component';

describe('EzCheckboxComponent', () => {
  let component: EzCheckboxComponent;
  let fixture: ComponentFixture<EzCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
