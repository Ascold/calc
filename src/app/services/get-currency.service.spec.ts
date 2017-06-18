import { TestBed, inject } from '@angular/core/testing';

import { GetCurrencyService } from './get-currency.service';

describe('GetCurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCurrencyService]
    });
  });

  it('should ...', inject([GetCurrencyService], (service: GetCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
