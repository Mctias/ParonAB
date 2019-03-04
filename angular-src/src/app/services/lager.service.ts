import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LagerService {
  lager: any;

  constructor(private http:Http) { }

  createLager(lager){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/lagers/addLager', JSON.stringify(lager), {headers: headers})
  		.map(res => res.json()); //(endpoint, object, headers).map(response as json)
  }

  updateWarehouse(data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/lagers/addDelivery', JSON.stringify(data), {headers: headers})
      .map(res => res.json()); //(endpoint, object, headers).map(response as json)

  }


  getLager(){
  	return this.http.get('http://localhost:3000/lagers/lager').map(res => res.json());	
  }

}