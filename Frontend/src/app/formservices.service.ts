import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormservicesService {
  userDetails= {
    name:'',
    image:'',
    summary:'',
    email:'',
    phoneNumber:'',
    address:'',
    city:'',
    pincode:''
  }
 otherDetails= {
    project:[],
    description:[],
    skills:[],
    interest:[],
    certificate:[],
    certificateyear:[],
    language:[],
    proficiency:[]
  }
  experienceDetails= {
    Title:[],
    CompanyName:[],
    CompanyAddress:[],
    Key:[],
    StartDate:[],
    EndDate:[],
    Achivements:[],
    Reference:[]
  }
  educationDetails= {
    Qualification:[],
    Institute:[],
    Course:[],
    CourseStartDate:[],
    CourseEndDate:[],
    year:[]
  }


  constructor(private http:HttpClient) { }
  setuserDetails(Details:any){
    this.userDetails=Details; 
  }
  setotherDetails(Details:any){
    this.otherDetails=Details; 
  }
  setexperienceDetails(Details:any){
    this.experienceDetails=Details; 
  }
  seteducationDetails(Details:any){
    this.educationDetails=Details; 
  }
  getuserDetails(){
   return  this.userDetails; 
  }
  getotherDetails(){
    return this.otherDetails;
  }
  getexperienceDetails(){
   return this.experienceDetails;
  }
  geteducationDetails(){
   return this.educationDetails;
  }

  newUser()
  {   
    var userdata=Object.assign(this.userDetails,this.educationDetails,this.experienceDetails,this.otherDetails)
    console.log(userdata);
    return this.http.post("http://localhost:3000/userinsert",{"UserDetails":userdata})
    .subscribe(data =>{console.log(data)})
  }

  UserDetails= [{
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

  getUser(){
     this.http.get('http://localhost:3000/getuser/'+this.userDetails.email).subscribe((data)=>{
      this.UserDetails=JSON.parse(JSON.stringify(data));
      console.log(this.UserDetails);
     })
    }

    GetUser(){
      return this.UserDetails;
    }
}


