import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, tileLayer, marker } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 24,
        attribution: 'Angular Movies',
      }),
    ],
    zoom: 12,
    center: latLng(-6.300454414359868, -253.19091796875003),
  };

  layers: Marker<any>[] = [];

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  constructor() {}

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map((value) =>
      marker([value.latitude, value.longitude])
    );
  }

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
    this.onSelectedLocation.emit({ latitude, longitude });
  }
}
