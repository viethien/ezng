import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EzTestHelper, EzFormsModule } from 'ngx-ez';
import { FormsModule } from '@angular/forms';
import { EzTableModule } from 'ngx-ez';

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
    const invalid = await helper.invalid('password');
    expect(invalid).toBeTruthy();
  });

  it('password should be valid', async () => {
    component.model.password = 'some password';
    const valid = await helper.valid('password');
    expect(valid).toBeTruthy();
  });

  it('password again should be invalid', async () => {
    component.model.password = 'some password';
    const invalid = await helper.invalid('passwordAgain');
    expect(invalid).toBeTruthy();
  });

  it('password again should be valid', async () => {
    component.model.password = 'some password';
    component.passwordAgain = 'some password';
    const valid = await helper.valid('passwordAgain');
    expect(valid).toBeTruthy();
  });
});
