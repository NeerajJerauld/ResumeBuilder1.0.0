import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  authenticateLogin(user:any){

    return this.http.post<any>("http://localhost:3000/login",user)//we are not handling result from here
    // .subscribe ((data)=>{
    //   console.log("successful login")
    // })
  }

  loggedIn(){

    return !!localStorage.getItem("token");

    
  }

  // LoggedIn()
  // {
  //   return !!localStorage.getItem('token1')
  // }
  getToken(){

    return localStorage.getItem("token");
  }

  addNewMember(member:any){
    return this.http.post<any>("http://localhost:3000/signup",member);
  }
}