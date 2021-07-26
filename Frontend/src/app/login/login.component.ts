import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private authService:AuthService,private router:Router, private modalService: NgbModal) { }

  user={
    username:'',
    password:''
  }
  error=""
  passwordError=""

  ngOnInit(): void {
  }

  clearText(){
    this.error='';
    
  }
  loginUser(){
    this.error="";
    console.log("Login Component method");
    this.authService.authenticateLogin(this.user)
    .subscribe(res=>{
     
      console.log("Status from server");
      // if(this.user.username=="admin"&&this.user.password=="Admin123")
      // {

      //     localStorage.setItem("token",res.token);
      //     this.modalService.dismissAll();
      //     window.location.replace("/dashboard")
      // }

      
      localStorage.setItem("token",res.token);
      window.location.replace("/dashboard")

      
    
    },
        (error) => {                              //Error callback
          console.error('error caught in component')
          const errorMessage = error;
         const  loading = false;
         if(error.status==403)
         this.passwordError="User does not exist";
         else if(error.status==401)
         this.passwordError="Invalid Password";
         else 
         this.passwordError=error;

         console.log(errorMessage);
         //this.router.navigate(["/welcome"]);
    
          //throw error;   //You can also throw the error to a global error handler
        });

  }

}
