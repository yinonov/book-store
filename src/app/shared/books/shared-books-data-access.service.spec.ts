import { TestBed } from '@angular/core/testing';

import { SharedBooksDataAccessService } from './shared-books-data-access.service';

describe('SharedBooksDataAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedBooksDataAccessService = TestBed.get(SharedBooksDataAccessService);
    expect(service).toBeTruthy();
  });
});
