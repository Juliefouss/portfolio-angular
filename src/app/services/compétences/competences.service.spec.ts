import { TestBed } from '@angular/core/testing';

import { Competences.ServiceService } from './competences.service.service';

describe('Competences.ServiceService', () => {
  let service: Competences.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competences.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
