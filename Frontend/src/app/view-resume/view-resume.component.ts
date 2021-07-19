import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.css']
})
export class ViewResumeComponent implements OnInit {

  doc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}
