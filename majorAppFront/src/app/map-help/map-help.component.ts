import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-help',
  templateUrl: './map-help.component.html',
  styleUrls: ['./map-help.component.css']
})
export class MapHelpComponent implements OnInit{
  
  constructor() {}
  ngOnInit(): void {
   
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }



  

};


