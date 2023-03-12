import { Component, OnInit } from '@angular/core';


interface MyMarker extends google.maps.Marker{
  position: google.maps.LatLngLiteral;
  title: string;
}
@Component({
  selector: 'app-map-help',
  templateUrl: './map-help.component.html',
  styleUrls: ['./map-help.component.css']
})


export class MapHelpComponent implements OnInit{
  map: google.maps.Map|undefined;
  constructor() {}
  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById('map')!, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 13
    });

    // add the markers
    const marker1 = new google.maps.Marker({
      position: { lat: 37.7891, lng: -122.4145 },
      map: this.map
    });

    const marker2 = new google.maps.Marker({
      position: { lat: 37.7739, lng: -122.4312 },
      map: this.map
    });

    const marker3 = new google.maps.Marker({
      position: { lat: 37.7539, lng: -122.4200 },
      map: this.map
    });

    const marker4 = new google.maps.Marker({
      position: { lat: 37.7975, lng: -122.4011 },
      map: this.map
    });

    // create the directions service
    const directionsService = new google.maps.DirectionsService();

    // create the directions renderer
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true
    });

    // create the waypoints
    const waypoints = [
      {
        location: marker1.getPosition()!,
        stopover: true
      },
      {
        location: marker2.getPosition()!,
        stopover: true
      },
      {
        location: marker3.getPosition()!,
        stopover: true
      },
      {
        location: marker4.getPosition()!,
        stopover: true
      }
    ];

    // create the request
    const request = {
      origin: marker1.getPosition()!,
      destination: marker4.getPosition()!,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING
    };

    // send the request to the directions service
    directionsService.route(request, (result, status) =>{
      if (status == google.maps.DirectionsStatus.OK) {
        // display the route on the map
        directionsRenderer.setDirections(result);
      }
    });
  }
  
};

