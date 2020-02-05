import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule

  ]
})
export class LocationModule { }
