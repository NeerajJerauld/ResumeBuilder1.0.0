import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'admin-panel-layout';
  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

}
