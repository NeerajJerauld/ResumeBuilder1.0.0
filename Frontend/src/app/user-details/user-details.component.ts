import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,FormControl } from '@angular/forms';
import { FormservicesService } from '../formservices.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  title = 'User Details';
  constructor(private router:Router, private FormServices:FormservicesService) { }
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
  
  onselectFile(e:any){
if(e.target.files){
  var reader=new FileReader();
  reader.readAsDataURL(e.target.files[0])
  reader.onload=(event:any)=>{
    this.userDetails.image=event.target.result;
  }
}
  }

  navigate(){
    this.router.navigate(["/form1"]);
    this.FormServices.setuserDetails(this.userDetails);
  }


  ngOnInit(): void {
    this.userDetails=this.FormServices.getuserDetails()
  }

}
