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
  educationDetails:any= {
    Qualification:[''],
    Institute:[''],
    Course:[''],
    CourseStartDate:[''],
    CourseEndDate:[''],
   year:['']
  }
 
  constructor(private router:Router, private FormServices:FormservicesService) { }
  navigate(){
    this.FormServices.seteducationDetails(this.educationDetails)
    this.router.navigate(["/form2"]);

    
    }
  

    form1=false;
    form2=true;
    form3=true;
    form4=true;
    form5=true;
    f0(){
      this.form1=false;
      this.form2=true;
      this.form3=true;
      this.form4=true;
      this.form5=true;
    }
    f1(){
      this.form1=true;
      this.form2=false;
      this.form3=true;
      this.form4=true;
      this.form5=true;
    }
    f2(){
      this.form1=true;
      this.form2=true;
      this.form3=false;
      this.form4=true;
      this.form5=true;
    }
    f3(){
      this.form1=true;
      this.form2=true;
      this.form3=true;
      this.form4=false;
      this.form5=true;
    }
    f4(){
      this.form1=true;
      this.form2=true;
      this.form3=true;
      this.form4=true;
      this.form5=false;
    }
    
    

  back(){
    this.router.navigate(["/addforms"])
  }

  ngOnInit(): void {
    this.educationDetails=this.FormServices.geteducationDetails()
  }

 

}
