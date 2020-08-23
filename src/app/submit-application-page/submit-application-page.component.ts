import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-submit-application-page',
  templateUrl: './submit-application-page.component.html',
  styleUrls: ['./submit-application-page.component.css']
})
export class SubmitApplicationPageComponent implements OnInit {
  public personform:FormGroup;
  public temp:any;
  constructor() { }

  ngOnInit(): void {
    this.personform=new FormGroup({
      firstname: new FormControl(),
      middlename : new FormControl(),
      lastname : new FormControl(),
      ssn_no : new FormControl(),
      marital_status :new FormControl()
    });
  }
  
  public onSubmit(){
    console.log(this.personform.value);
  }

}
