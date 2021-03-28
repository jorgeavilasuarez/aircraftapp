import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentComponent } from './rent/rent.component';
import { AircraftRoutingModule } from './aircraft-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [RentComponent],
  imports: [
    CommonModule,
    AircraftRoutingModule,
    ComponentsModule
  ]
})
export class AircraftModule { }
