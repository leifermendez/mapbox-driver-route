import { TestBed } from '@angular/core/testing';

import { MapCustomService } from './map-custom.service';

describe('MapCustomService', () => {
  let service: MapCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
