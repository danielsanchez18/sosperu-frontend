import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PlacesService{

  public userLocation? : {lat: number, lng: number};


}
