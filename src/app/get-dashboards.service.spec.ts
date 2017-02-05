/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDashboardsService } from './get-dashboards.service';

describe('GetDashboardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDashboardsService]
    });
  });

  it('should ...', inject([GetDashboardsService], (service: GetDashboardsService) => {
    expect(service).toBeTruthy();
  }));
});
