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
    // proficinery:[''],
  
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

  constructor(public router: ActivatedRoute,public FormServices:FormservicesService) { }
  ngOnInit(): void {
   
    this.router.params.subscribe(params => {
      // this.FormServices.getUserDetailsOnEmail(params.userID).subscribe((data)=>{

      //   this.userDetails = JSON.parse(JSON.stringify(data));
      // })
      // this.userDetails = JSON.parse(JSON.stringify(this.FormServices.getUserDetailsOnEmail(params.userID)));
      // this.userDetails= this.FormServices.getUserDetailsOnEmail(params.userID);
      // this.userDetails = this.FormServices.getUserDetailsOnEmail(params.userID)
      this.FormServices.getUserDetailsOnEmail(params.userID)
      console.log("I am here!!!")
      console.log(this.FormServices.getUserDetailsOnEmail(params.userID))
    })
  }

}
