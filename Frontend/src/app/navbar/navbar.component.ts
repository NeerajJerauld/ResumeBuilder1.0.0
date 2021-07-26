import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { RegisterimageService } from '../registerimage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // closeResult: string;
  imageSrc = '';

  constructor(private modalService: NgbModal,private data:RegisterimageService,private router: Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.imageSrc = message)
    console.log("Are you logged in? :"+this._auth.loggedIn())
  }
  openLg(content: any) {

  this.modalService.open(content, { size: 'lg',backdrop : 'static',keyboard : false});
 
  }
  closeModal(){
    // this.modalReference.close()
  //   setTimeout(() => {
  //     console.log("I am logged in successfully")
  //     // this.router.navigate(["/dashboard"]);
  //     this.router.navigateByUrl("http://localhost:4200/dashboard")
      
  // }, 0);
  // window.location.reload()
    window.location.replace("/home")
  }
  


  signinImage(){
    this.data.changeMessage("../../assets/images/registerSignin.png")
  }
  loginImage(){
    this.data.changeMessage("../../assets/images/registerLogin.png")
  }
  logOut(){

    localStorage.removeItem("token");
    this.router.navigate(["home"]);
  }
}
