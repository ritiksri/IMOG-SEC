import { TestBed } from '@angular/core/testing';

import { RajaMantriChorSipahiService } from './raja-mantri-chor-sipahi.service';

describe('RajaMantriChorSipahiService', () => {
  let service: RajaMantriChorSipahiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RajaMantriChorSipahiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
