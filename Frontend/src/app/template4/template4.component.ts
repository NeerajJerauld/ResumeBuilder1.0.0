import { Component, OnInit } from '@angular/core';
import { FormservicesService } from '../formservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {
  userDetails= [{
    name:'',
    image:'',
    summary:'',
    email:'',
    phonenumber:'',
    address:'',
    city:'',
    pincode:'',
 
    projectname:[''],
    projectdescription:[''],
    skill:[''],
    interest:[''],
    Certificatetitle:[''],
    Certificateyear:[''],
    languagename:[''],
    proficiency:[''],
  
    title:[''],
    companyname:[''],
    companyaddress:[''],
    keyresponsibilities:[''],
    startdate:[''],
    enddate:[''],
    achivements:[''],
    references:[''],

    qualification:[''],
    institution:[''],
    Course:[''],
    coursestartdate:[''],
    courseenddate:[''],
    year:['']
  }]
  constructor(public FormServices:FormservicesService,private router:Router) { }

  ngOnInit(): void {
    this.userDetails= this.FormServices.GetUser();
 
  }

  edituser(user:any)
  {
    localStorage.setItem("userId", user._id.toString());

    this.router.navigate(['edit']);

  }

}
