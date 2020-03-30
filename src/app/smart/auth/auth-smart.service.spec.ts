import { TestBed } from '@angular/core/testing';

import { AuthSmartService } from './auth-smart.service';

describe('AuthSmartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSmartService = TestBed.get(AuthSmartService);
    expect(service).toBeTruthy();
  });
});
