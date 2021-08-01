import { Component, OnInit } from '@angular/core';
import { FormservicesService } from '../formservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css', './template1.componentPrint.css']
})
export class Template1Component implements OnInit {
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

    this.router.navigate(['/edit']);

  }
}
