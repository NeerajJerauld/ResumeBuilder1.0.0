import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebsiteComponent } from './view-website.component';

describe('ViewWebsiteComponent', () => {
  let component: ViewWebsiteComponent;
  let fixture: ComponentFixture<ViewWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
