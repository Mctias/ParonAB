import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../../services/warehouse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {
	name: String;
	pName: String;
	noItems: Number;

  constructor(private warehouseSevice:WarehouseService,
  			  private router:Router) { }

  ngOnInit() {
  }
  //We create the warehose
  onCreateLager(){
  	const warehouse = {
  		name: this.name
  	}
  	this.warehouseSevice.createWarehouse(warehouse).subscribe(data=>{
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
