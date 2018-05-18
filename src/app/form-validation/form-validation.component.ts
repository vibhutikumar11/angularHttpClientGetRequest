import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styles: []
})
export class FormValidationComponent implements OnInit {

  emailbox='';
  mobilebox='';
  constructor() { }

  ngOnInit() {

  }

  saveEData(){
    console.log(this.mobilebox);
    console.log(this.emailbox);
  }

}
