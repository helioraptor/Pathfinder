import { TestBed, inject } from '@angular/core/testing';

import { OmicsDIService } from './http.service';

describe('OmicsDIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmicsDIService]
    });
  });

  it('should be created', inject([OmicsDIService], (service: OmicsDIService) => {
    expect(service).toBeTruthy();
  }));
});
