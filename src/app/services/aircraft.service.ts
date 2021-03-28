import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AircraftInterface } from '../models/aircraftInterface';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private httpService: HttpClient) { }

  public Search() {
    return this.httpService.get<AircraftInterface[]>('/aircrafts');
  }
}
