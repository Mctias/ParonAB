/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LagerService } from './lager.service';

describe('LagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LagerService]
    });
  });

  it('should ...', inject([LagerService], (service: LagerService) => {
    expect(service).toBeTruthy();
  }));
});
