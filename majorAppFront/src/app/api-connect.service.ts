import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  private searchUrl = 'http://localhost:3000/api/numPlate';
  private postUrl = 'http://localhost:3000/api/sNumPlate';
  constructor(private http: HttpClient) {

  }
  
  getNumplate(){
    return this.http.get<any[]>(this.searchUrl);
  }

  postNumPlate(data: any){
    return this.http.post(this.postUrl,data);
  }

}