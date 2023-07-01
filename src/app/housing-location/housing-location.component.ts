import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housing.photo" alt="Exterior photo of {{housing.name}}">
    <h2 class="listing-heading">{{ housing.name }}</h2>
    <p class="listing-location">{{ housing.city}}, {{housing.state }}</p>
    <a [routerLink]="['/details', housing.id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housing!: HousingLocation;
}
