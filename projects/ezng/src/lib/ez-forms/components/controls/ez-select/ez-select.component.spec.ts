import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzSelectComponent } from './ez-select.component';

describe('EzSelectComponent', () => {
  let component: EzSelectComponent;
  let fixture: ComponentFixture<EzSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
