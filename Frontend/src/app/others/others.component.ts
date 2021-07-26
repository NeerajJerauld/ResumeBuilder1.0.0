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
    project:'',
    description:'',
    skills:'',
    interest:'',
    certificate:'',
    certificateyear:'',
    language:'',
    proficinery:''
  }
  
  constructor(private router:Router, private FormServices:FormservicesService) { }
 navigate(){
  this.FormServices.setotherDetails(this.otherDetails);
  this.FormServices.newUser();
  console.log("Called");    
  alert("Success");
    this.router.navigate(["/"]);
  }
  back(){
    this.router.navigate(["/form2"]); 
  }
  ngOnInit(): void {
    this.otherDetails=this.FormServices.getotherDetails()
  }

}
