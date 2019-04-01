import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EzTestHelper, EzFormsModule } from 'projects/ezng/src/public-api';
import { FormsModule } from '@angular/forms';
import { EzTableModule } from 'ezng/ngx-ez';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, EzFormsModule, EzTableModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let helper: EzTestHelper<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    helper = new EzTestHelper(fixture);
  });

  it('password should be invalid', async () => {
    const valid = await helper.valid('password');
    expect(valid).toBeFalsy();
  });

  it('password should be valid', async () => {
    component.model.password = 'some password';
    const valid = await helper.valid('password');
    expect(valid).toBeFalsy();
  });

  it('password again should be invalid', async () => {
    component.model.password = 'some password';
    const valid = await helper.valid('passwordAgain');
    expect(valid).toBeFalsy();
  });

  it('password again should be valid', async () => {
    component.model.password = 'some password';
    component.passwordAgain = 'some password';
    const valid = await helper.valid('passwordAgain');
    expect(valid).toBeFalsy();
  });
});
