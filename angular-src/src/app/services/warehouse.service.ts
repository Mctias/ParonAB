import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WarehouseService {
  warehouse: any;

  constructor(private http:Http) { }

  createWarehouse(warehouse){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/warehouses/addWarehouse', JSON.stringify(warehouse), {headers: headers})
  		.map(res => res.json()); //(endpoint, object, headers).map(response as json)
  }

  updateWarehouse(data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/warehouses/updateWarehouse', JSON.stringify(data), {headers: headers})
      .map(res => res.json()); //(endpoint, object, headers).map(response as json)

  }

  getWarehouse(){
  	return this.http.get('http://localhost:3000/warehouses/warehouse').map(res => res.json());	
  }

}
