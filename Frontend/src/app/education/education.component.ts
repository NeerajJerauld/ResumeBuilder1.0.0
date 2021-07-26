import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormservicesService } from '../formservices.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title = 'Education Details';
  educationDetails= {
    Qualification:'',
    Institute:'',
    Course:'',
    CourseStartDate:'',
    CourseEndDate:'',
   year:''
  }
  constructor(private router:Router, private FormServices:FormservicesService) { }
  navigate(){
    this.FormServices.seteducationDetails(this.educationDetails)
    this.router.navigate(["/form2"]);
      
   
  }

  back(){
    this.router.navigate(["/addforms"])
  }

  ngOnInit(): void {
    this.educationDetails=this.FormServices.geteducationDetails()
  }

 

}
