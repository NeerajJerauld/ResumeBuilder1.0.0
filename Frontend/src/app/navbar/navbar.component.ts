import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  
}
