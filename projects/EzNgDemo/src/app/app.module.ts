import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EzFormsModule } from 'projects/ezng/src/lib/ez-forms/ez-forms.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EzTableModule } from 'projects/ezng/src/lib/ez-table/ez-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EzFormsModule,
    EzTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
