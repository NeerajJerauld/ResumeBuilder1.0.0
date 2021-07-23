import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registerframe',
  templateUrl: './registerframe.component.html',
  styleUrls: ['./registerframe.component.css']
})
export class RegisterframeComponent implements OnInit {

  public radioGroupForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }

}
