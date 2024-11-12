import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'citizen-comunity-alerts-detail',
  templateUrl: './comunity-alerts-detail.component.html',
})
export class CitizenComunityAlertsDetailComponent implements OnInit {

  map: L.Map | undefined;
  userLocation: [number, number] | undefined;
  locationLoaded: boolean = false;

  ngOnInit(): void {
    console.log("Se cargo el componente")

    this.getUserLocation().then(location => {
      console.log(location)
      this.userLocation = location;
      this.locationLoaded = true;
      this.initMap();
    }).catch(() => {
      console.log("No se pudo obtener la ubicación del usuario.");
      this.initMap();
    });

  }

  private async getAddress(location: [number, number]){
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location[1]}&lon=${location[0]}`;
    const response = await fetch(url)
    const data = await response.json();
    return data.name;
  }

  private initMap(): void {

    setTimeout( async () => {
      const initialLocation = this.userLocation!
      this.map = L.map('map').setView( [ initialLocation[1], initialLocation[0] ] , 17);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(this.map);

        L.marker( [-6.781322, -79.846945] ).addTo(this.map)
          .bindPopup('Your Location')
          .openPopup();

        const address = await this.getAddress(initialLocation)

        L.marker( [-6.781322, -79.846945] ).addTo(this.map)
          .bindPopup( address )
          .openPopup();

        const policeIcon = L.icon({
          iconUrl: "icons/police_icon.png",
          iconSize: [30, 30],
          iconAnchor: [20, 30],
          popupAnchor: [0, -30]
        })

        const policias = [
          {
            lat: -6.781707, lng: -79.846081, nombre: "Policia 1"
          },
          {
            lat: -6.782062, lng: -79.846860, nombre: "Policia 2"
          },
          {
            lat: -6.780554, lng: -79.846488, nombre: "Policia 3"
          },
          {
            lat: -6.780545, lng: -79.847628, nombre: "Policia 4"
          }
        ]

        const map = this.map

        policias.forEach( police => {
          let policeMarker = L.marker( [police.lat, police.lng], {icon: policeIcon } ).addTo(map)
          policeMarker.bindPopup(`<b>${police.nombre}</b>`);

          setInterval(function() {
            var newLat = police.lat + (Math.random() - 0.5) * 0.001;
            var newLng = police.lng + (Math.random() - 0.5) * 0.001;

            policeMarker.setLatLng([newLat, newLng]);

            police.lat = newLat;
            police.lng = newLng;

        }, 1000);

        })


    }, 0);

  }

  private getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject) => {

      setTimeout(() => {
        navigator.geolocation.getCurrentPosition( ({coords}) => {
          this.userLocation = [coords.longitude, coords.latitude]
          resolve(this.userLocation)
        },
        (err) => {
          console.log("No se pudo obtener la ubicacion")
          reject()
        }

        )
      }, 1000);

    } )
  }
}
