import { Component, OnInit } from '@angular/core';
import {WarehouseService} from '../../services/warehouse.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	name: String;
  warehouses: any;
  chart: any;

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit() {
    this.warehouseService.getWarehouse().subscribe(data =>{
      this.warehouses = data;
      console.log(data);
    },err => {
      console.log(err);
    });

  }
  
 
}
