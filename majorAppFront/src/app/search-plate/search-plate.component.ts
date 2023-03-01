
import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConnectService } from '../api-connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-plate',
  templateUrl: './search-plate.component.html',
  styleUrls: ['./search-plate.component.css']
})
export class SearchPlateComponent {
  plateNumber: string = '';

  constructor(private api_conn: ApiConnectService,private http: HttpClient,private router: Router){

  }
  OnSubmit(): void{
    
    const sData = {
      'numplate' : this.plateNumber
    }
    this.api_conn.postNumPlate(sData).subscribe();
    this.router.navigate(['/map-page'],{
      queryParams: sData
    });
  }
}
