import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-viewdashboard',
  templateUrl: './viewdashboard.component.html',
  styleUrls: ['./viewdashboard.component.css']
})
export class ViewdashboardComponent {
   
  card=[{
    title: "Resume1",
    doc : "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",
    cols:1,
    rows:1,
    },{
    title: "Resume1",
    doc : "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf",
    cols:1,
    rows:1,}]
 

  constructor(private breakpointObserver: BreakpointObserver) {}
}
