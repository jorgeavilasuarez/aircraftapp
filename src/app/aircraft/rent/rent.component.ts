import { Component, OnInit } from '@angular/core';
import { AircraftInterface } from 'src/app/models/aircraftInterface';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  results: AircraftInterface[] = [];
  constructor(public aircraftService: AircraftService) { }

  ngOnInit(): void {

  }

  search() {
    this.aircraftService.Search().subscribe(aircrafts => {
      this.results = aircrafts;
    });
  }
}
