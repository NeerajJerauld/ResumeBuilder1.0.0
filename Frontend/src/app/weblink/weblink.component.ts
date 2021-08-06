import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormservicesService } from '../formservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weblink',
  templateUrl: './weblink.component.html',
  styleUrls: ['./weblink.component.css']
})
export class WeblinkComponent implements OnInit {
  userDetails:any= [{
    name:'',
    image:'',
    summary:'',
    email:'',
    phonenumber:'',
    address:'',
    city:'',
    pincode:'',
 
    projectname:['project1','project2','project3'],
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

  constructor(public router: ActivatedRoute,public FormServices:FormservicesService,private http:HttpClient) { }
  ngOnInit(): void {
   
    this.router.params.subscribe(params => {
      this.http.get('http://localhost:3000/getuser/'+params.userID).subscribe((data)=>{
        this.userDetails=JSON.parse(JSON.stringify(data));
        console.log(this.userDetails)
       })
     
    })
    
  }

}
