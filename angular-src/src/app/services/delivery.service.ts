import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DeliveryService {

  constructor(private http:Http) { }

  addDelivery(data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/deliveries/addDelivery', JSON.stringify(data), {headers: headers})
      .map(res => res.json()); //(endpoint, object, headers).map(response as json)

  }


  getDeliveries(){
  	return this.http.get('http://localhost:3000/deliveries/delivery').map(res => res.json());	
  }

}
