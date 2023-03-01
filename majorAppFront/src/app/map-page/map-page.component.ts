import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiConnectService } from '../api-connect.service';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit{
  numplate: string = '';
  constructor(private route: ActivatedRoute, private router: Router,private apiconn: ApiConnectService){

  }
  
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.numplate = params['numplate'];
      });
    const sDate = {
      'numplate': this.numplate
    }
    this.apiconn.postNumPlate(sDate);
    
  }





}
