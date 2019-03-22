import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EzFormsModule } from 'projects/ezng/src/lib/ez-forms/ez-forms.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EzFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
