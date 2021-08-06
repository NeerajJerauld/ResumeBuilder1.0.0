import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormservicesService } from '../formservices.service';

@Component({
  selector: 'app-weblink',
  templateUrl: './weblink.component.html',
  styleUrls: ['./weblink.component.css']
})
export class WeblinkComponent implements OnInit {
  userDetails= [{
    name:'name',
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
    proficinery:[''],
  
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

  constructor(private router: ActivatedRoute,public FormServices:FormservicesService) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let userdata = params.userID;
    })
  }

}
