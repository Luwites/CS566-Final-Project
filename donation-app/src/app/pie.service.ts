import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PieService {
tempId:any=''
temp: any = false
  constructor(private http: HttpClient) { }

  getAllPiesUpForDonation() {
    return this.http.get(`http://localhost:7000/pies`)
  }
  getPieDetailsById(id: any) {
    return this.http.get(`http://localhost:7000/pies/${id}`)
  }
  submitAddressForShipment(obj:any){
    return this.http.post('http://localhost:7000/newship', obj)
  }
  setId(id:any){
    this.tempId = id
  }
  getId(){
    return this.tempId;
  }
  gettoggler(){
    return this.temp
  }
  setToggler(){
    this.temp = !this.temp
  }
}
