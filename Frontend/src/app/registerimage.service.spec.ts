import { TestBed } from '@angular/core/testing';

import { RegisterimageService } from './registerimage.service';

describe('RegisterimageService', () => {
  let service: RegisterimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
