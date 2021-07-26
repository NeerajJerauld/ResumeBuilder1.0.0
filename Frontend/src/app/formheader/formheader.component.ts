import { Component, OnInit } from '@angular/core';
import { FormservicesService } from '../formservices.service';
@Component({
  selector: 'app-formheader',
  templateUrl: './formheader.component.html',
  styleUrls: ['./formheader.component.css']
})
export class FormheaderComponent implements OnInit {
  userDetails= {
    name:'',
    image:'',
    email:'',
    phoneNumber:'',
    address:'',
    city:'',
    pincode:''
  }
  constructor(private FormService:FormservicesService) { }

  ngOnInit(): void {
    this.userDetails=this.FormService.getuserDetails();
  }

}
