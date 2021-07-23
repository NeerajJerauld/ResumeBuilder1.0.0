import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//this is a variable that hold number
accuratecount:number = 400;
clientcount:number = 600;
customerfeedback:number = 0;

accuratecountstop:any = setInterval(()=>{
  this.accuratecount++;
  if(this.accuratecount == 849)
  {
    
    clearInterval(this.accuratecountstop);
  }
},3) 


clientcountstop:any = setInterval(()=>{
  this.clientcount++;
  if(this.clientcount == 999)
  {
    
    clearInterval(this.clientcountstop);
  }
},0.1)

customerfeedbackstop:any = setInterval(()=>{
  this.customerfeedback++;
  if(this.customerfeedback == 100)
  {
    
    clearInterval(this.customerfeedbackstop);
  }
},15)

  constructor() { }

  ngOnInit(): void {
  }

}
