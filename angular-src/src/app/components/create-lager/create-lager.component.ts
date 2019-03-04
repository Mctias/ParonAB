import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../../services/warehouse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-lager',
  templateUrl: './create-lager.component.html',
  styleUrls: ['./create-lager.component.css']
})
export class CreateLagerComponent implements OnInit {
	name: String;
	pName: String;
	noItems: Number;

  constructor(private warehouseSevice:WarehouseService,
  			  private router:Router) { }

  ngOnInit() {
  }
  onCreateLager(){
  	const lager = {
  		name: this.name
  	}
  	this.warehouseSevice.createWarehouse(lager).subscribe(data=>{
  		if(data.success){
  			console.log('Warehouse added!');
  			this.router.navigate(['/dashboard']);
  		}
  		else{
  			console.log(data.msg);
  		}
  	});
  }
}
