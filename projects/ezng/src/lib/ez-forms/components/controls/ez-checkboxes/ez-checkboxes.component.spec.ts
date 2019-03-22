import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzCheckboxesComponent } from './ez-checkboxes.component';

describe('EzCheckboxesComponent', () => {
  let component: EzCheckboxesComponent;
  let fixture: ComponentFixture<EzCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
