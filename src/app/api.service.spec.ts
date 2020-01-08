import {
  TestBed
} from '@angular/core/testing';

import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

import {
  ApiService
} from './api.service';
import { Observable } from 'rxjs';
import { Stock } from './stock/stock.model';


describe('ApiService', () => {
  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.get(
      ApiService
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have "getStock" function', () => {
    expect(service.getStock).toBeTruthy();
  });

  describe('"getStock"', () => {
    it('should return an Observable of type Stock', () => {
      expect(service.getStock('AAPL')).toEqual(jasmine.any(Observable));
    });
    it('should return null when empty ticker is provided', () => {
      expect(service.getStock('')).toBeNull();
    });
    it('should return null when no ticker is provided', () => {
      expect(service.getStock(null)).toBeNull();
    });
    it('should return Stock object in Observable when ticker is provided', () => {
      service.getStock('AAPL').subscribe(data => {
        expect(data).toEqual(jasmine.any(Stock));
      });
    });
    // expect(data.profile.description).toEqual("test");
  });
});
