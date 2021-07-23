import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterframeComponent } from './registerframe.component';

describe('RegisterframeComponent', () => {
  let component: RegisterframeComponent;
  let fixture: ComponentFixture<RegisterframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
