import { TestBed } from '@angular/core/testing';

import { SearchPortalService } from './search-portal.service';

describe('SearchPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPortalService = TestBed.get(SearchPortalService);
    expect(service).toBeTruthy();
  });
});
