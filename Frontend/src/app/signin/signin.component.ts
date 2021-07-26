import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
   
    this.auth.addNewMember(this.user).subscribe(res=>{
      alert("Successful")
      this.router.navigate(["/login"]);

    },(error) => {                              //Error callback
      console.error('error caught in component')
      const errorMessage = error;
     const  loading = false;
     if(error.status==409){ 
      this.passwordMatch="User already exist";
     }

     else {
      this.passwordMatch=error;

      console.log(errorMessage);
     }

    }
    );
  

  }


  }
 

  ngOnInit(): void {

  }
  


}
