import { TestBed } from '@angular/core/testing';

import { TopFiveProductsService } from './top-five-products.service';

describe('TopFiveProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopFiveProductsService = TestBed.get(TopFiveProductsService);
    expect(service).toBeTruthy();
  });
});
