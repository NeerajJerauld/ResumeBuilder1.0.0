import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormservicesService } from '../formservices.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title = 'Experience Details';
  constructor(private router:Router, private FormServices:FormservicesService) { }
  experienceDetails= {
    Title:[''],
    CompanyName:[''],
    CompanyAddress:[''],
    Key:[''],
    StartDate:[''],
    EndDate:[''],
    Achivements:[''],
    Reference:['']
  }
 
Form1=false;
Form2=true;

f0(){
  this.Form1=false;
  this.Form2=true;
}
f1(){
  this.Form1=true;
  this.Form2=false;
}
  navigate(){
    this.FormServices.setexperienceDetails(this.experienceDetails)
    this.router.navigate(["/form3"]);
   
  }
  back(){
    this.router.navigate(["/form1"])
  }
  ngOnInit(): void {
    this.experienceDetails=this.FormServices.getexperienceDetails()
  }

}
