import { TestBed } from '@angular/core/testing';

import { GeoAreaService } from './geo-area.service';

describe('GeoAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoAreaService = TestBed.get(GeoAreaService);
    expect(service).toBeTruthy();
  });
});
