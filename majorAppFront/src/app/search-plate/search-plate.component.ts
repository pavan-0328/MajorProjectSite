import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plate',
  templateUrl: './search-plate.component.html',
  styleUrls: ['./search-plate.component.css']
})
export class SearchPlateComponent {
  plateNumber: string = '';

  OnSubmit(): void{
    alert("Submited!")
  }
}
