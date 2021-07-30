import { Component, OnInit } from '@angular/core';
import { FormservicesService } from '../formservices.service';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(public FormService:FormservicesService) { }

  ngOnInit(): void {
  }
 user(){
this.FormService.getUser()
 }

}
