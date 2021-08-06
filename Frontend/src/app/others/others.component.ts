import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormservicesService } from '../formservices.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  title = 'Others';
  otherDetails= {
    project:[''],
    description:[''],
    skills:[''],
    interest:[''],
    certificate:[''],
    certificateyear:[''],
    language:[''],
    proficiency:[''],
    fieldname:'',
    fieldinput:''
  }

  Form1=false;
Form2=true;
Form3=true;

f0(){
  this.Form1=false;
  this.Form2=true;
  this.Form3=true;
}
f1(){
  this.Form1=true;
  this.Form2=false;
  this.Form3=true;
}
f2(){
  this.Form1=true;
  this.Form2=true;
  this.Form3=false;
}
  
  constructor(private router:Router, private FormServices:FormservicesService) { }
 navigate(){
  this.FormServices.setotherDetails(this.otherDetails);
  this.FormServices.newUser();
  console.log("Called");    
  alert("Success");
  this.FormServices.getUser();
    this.router.navigate(["/templates"]);
   
  }
  back(){
    this.router.navigate(["/form2"]); 
  }
  ngOnInit(): void {
    this.otherDetails=this.FormServices.getotherDetails()
  }
showImage: boolean = false;
toggleImage(): void{
  this.showImage = !this.showImage;
}
}
