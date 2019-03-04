import { Component, OnInit } from '@angular/core';
import{WarehouseService} from '../../services/warehouse.service';
import{DeliveryService} from '../../services/delivery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.css']
})
export class NewDeliveryComponent implements OnInit {

  warehouses: any;
  name: string;
  deliveries: any;

  warehouse: string;
  pName: string; //Product name
  noItems: number;
  date: string;

  constructor(private warehouseService: WarehouseService,
  			  private deliveryService: DeliveryService,
  			  private router: Router) { }
  
  //On init get all the warehouses
  ngOnInit() {
  	this.warehouseService.getWarehouse().subscribe(warehouse =>{
      this.warehouses = warehouse;
    },err => {
      console.log(err);
    });
  }

  //On add delivery create new delviery and update stocks
  onAddDelivery(){
    const delivery = {
      name: this.warehouse,
      pName: this.pName, //Product name
      noItems: this.noItems,
      date: this.date.toString() //Parse date to string
    }
    console.log(this.warehouse);
    this.warehouseService.updateWarehouse(delivery).subscribe(data => {
      if(data.success){
        this.addDeliver(delivery);
        //Renavigate to dashboard
        this.router.navigate(['/dashboard']);
      }
      else {
        console.log(data.msg);
      }
    });
  }

  //Function for adding the new deivery to deliveries
  addDeliver(data){
      this.deliveryService.addDelivery(data).subscribe(data =>{
        if(data.success)
          console.log('Success!')
        else
          console.log(data.msg)
      });
  }

  onCancel(){
    this.router.navigate(['/leveranser']);
  }
}
