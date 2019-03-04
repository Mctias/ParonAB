import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class ProductService {
	authToken: any;
	product: any;

  constructor(private http:Http) { }

  createProduct(product){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/products/addProduct', JSON.stringify(product), {headers: headers})
  		.map(res => res.json()); //(endpoint, object, headers).map(response as json)
  }

  getProducts(){
  	return this.http.get('http://localhost:3000/products/products').map(res => res.json());	
  }
  
}