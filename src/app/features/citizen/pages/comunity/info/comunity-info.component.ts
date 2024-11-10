import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'citizen-comunity-info',
  templateUrl: './comunity-info.component.html',
})
export class CitizenComunityInfoComponent {

  map: L.Map | undefined;

  ngOnInit(): void {
    console.log("Se cargo el componente")
    this.initMap()
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '© OpenStreetMap contributors'
    // }).addTo(this.map);

    // L.marker([51.5, -0.09]).addTo(this.map)
    //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    //   .openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  }

}
