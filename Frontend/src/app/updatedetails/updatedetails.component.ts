import { Component, OnInit } from '@angular/core';
import { FormservicesService } from '../formservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {

  userDetails= {
    name:'',
    image:'',
    email:'',
    phoneNumber:'',
    address:'',
    city:'',
    pincode:'',
    summary:''
  }
  otherDetails:any= {
    project:[],
    description:[],
    skills:[],
    interest:[],
    certificate:[],
    certificateyear:[],
    language:[],
    proficiency:[]
  }
  experienceDetails:any= {
    Title:[],
    CompanyName:[],
    CompanyAddress:[],
    Key:[],
    StartDate:[],
    EndDate:[],
    Achivements:[],
    Reference:[]
  }
  educationDetails:any= {
    Qualification:[],
    Institute:[],
    Course:[],
    CourseStartDate:[],
    CourseEndDate:[],
    year:[]
  }
  Id:any={
    user:''
  }

  title="Update";
  constructor(public FormServices:FormservicesService, private router:Router) { }

  ngOnInit(): void {
    this.userDetails= this.FormServices.getuserDetails();
    this.educationDetails=this.FormServices.geteducationDetails();
    this.experienceDetails=this.FormServices.getexperienceDetails();
    this.otherDetails=this.FormServices.getotherDetails();
    this.Id.user=localStorage.getItem('userId');
   
  }

  updateUser()
  { 
  
    var userdata=Object.assign(this.userDetails,this.educationDetails,this.experienceDetails,this.otherDetails,this.Id)
    this.FormServices.updateUser(userdata);   
    alert("Success");
    this.FormServices.getUser();
    this.router.navigate(['templates']);
  }

}
