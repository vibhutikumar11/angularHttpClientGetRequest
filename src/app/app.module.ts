import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FormValidationComponent } from './form-validation/form-validation.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule],
  declarations: [ AppComponent,FormValidationComponent],
  bootstrap:    [ FormValidationComponent]
})
export class AppModule { }
