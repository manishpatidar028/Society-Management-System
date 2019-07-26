import { TestBed } from '@angular/core/testing';

import { ComplaintServiceService } from './complaint-service.service';

describe('ComplaintServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintServiceService = TestBed.get(ComplaintServiceService);
    expect(service).toBeTruthy();
  });
});
