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
    Title:'',
    CompanyName:'',
    CompanyAddress:'',
    Key:'',
    StartDate:'',
    EndDate:'',
    Achivements:'',
    Reference:''
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
