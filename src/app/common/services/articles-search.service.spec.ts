import { TestBed, inject } from '@angular/core/testing';

import { ArticlesSearchService } from './articles-search.service';

describe('ArticlesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesSearchService]
    });
  });

  it('should be created', inject([ArticlesSearchService], (service: ArticlesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
