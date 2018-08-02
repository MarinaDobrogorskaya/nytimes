import { TestBed, inject } from '@angular/core/testing';

import { BestartSearchService } from './bestart-search.service';

describe('BestartSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BestartSearchService]
    });
  });

  it('should be created', inject([BestartSearchService], (service: BestartSearchService) => {
    expect(service).toBeTruthy();
  }));
});
