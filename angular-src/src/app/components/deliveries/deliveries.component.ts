import { Component, OnInit } from '@angular/core';
import{DeliveryService} from '../../services/delivery.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  deliveries: any;

  constructor(private deliveryService:DeliveryService,
              private router: Router) { }

//On init we get all the deliveries
  ngOnInit() {   
   this.deliveryService.getDeliveries().subscribe(delivery =>{
      this.deliveries = delivery;
    },err => {
      console.log(err);
    });
  } 
  //Check if the delivery has a positive or negative number of items
  isPositive(delivery){
    if(delivery.noItems > 0)
      return true;
    return false;
  }
  //Creates a new delivery
  onCreateNewDelivery(){
    this.router.navigate(['/createDelivery']);
  }
}
