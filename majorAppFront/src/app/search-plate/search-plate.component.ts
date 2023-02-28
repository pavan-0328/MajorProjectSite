
import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConnectService } from '../api-connect.service';
@Component({
  selector: 'app-search-plate',
  templateUrl: './search-plate.component.html',
  styleUrls: ['./search-plate.component.css']
})
export class SearchPlateComponent {
  plateNumber: string = '';

  constructor(private api_conn: ApiConnectService,private http: HttpClient){

  }
  OnSubmit(): void{
    
    const sData = {
      'numplate' : this.plateNumber
    }
    this.api_conn.postNumPlate(sData).subscribe()
    alert("Submited! " +this.plateNumber )
  }
}
