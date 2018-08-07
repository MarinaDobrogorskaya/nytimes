import { TestBed, inject } from '@angular/core/testing';

import { EndPageService } from './end-page.service';

describe('EndPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndPageService]
    });
  });

  it('should be created', inject([EndPageService], (service: EndPageService) => {
    expect(service).toBeTruthy();
  }));
});
