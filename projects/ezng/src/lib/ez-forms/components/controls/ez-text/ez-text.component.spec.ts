import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzTextComponent } from './ez-text.component';

describe('EzTextComponent', () => {
  let component: EzTextComponent;
  let fixture: ComponentFixture<EzTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
