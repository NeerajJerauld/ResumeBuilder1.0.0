import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user={
    fname:'',
    email:'',
    username:'',
    password:'',
    repassword:''
  }
  passwordMatch=""
  constructor(private router:Router,private auth:AuthService) { }
  verify(){

    if(this.user.password!=this.user.repassword){
      this.passwordMatch="Password does not match";
    }
    else{
    alert("Succesful");
    this.auth.addNewMember(this.user).subscribe(res=>{

      this.router.navigate(["/login"]);
    });

  }


  }
 

  ngOnInit(): void {
   

  }

}
