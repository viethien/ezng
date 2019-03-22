import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzRadioComponent } from './ez-radio.component';

describe('EzRadioComponent', () => {
  let component: EzRadioComponent;
  let fixture: ComponentFixture<EzRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
