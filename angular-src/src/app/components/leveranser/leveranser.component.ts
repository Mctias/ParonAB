import { Component, OnInit } from '@angular/core';
import{LagerService} from '../../services/lager.service';
import{DeliveryService} from '../../services/delivery.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-leveranser',
  templateUrl: './leveranser.component.html',
  styleUrls: ['./leveranser.component.css']
})
export class LeveranserComponent implements OnInit {
  deliveries: any;




  constructor(private lagerService:LagerService,
              private deliveryService:DeliveryService,
              private router: Router) { }

  ngOnInit() {   
   this.deliveryService.getDeliveries().subscribe(delivery =>{
      this.deliveries = delivery;
    },err => {
      console.log(err);
    });
     
  } 
  isPositive(delivery){
    if(delivery.noItems > 0)
      return true;
    return false;
  }
  onCreateNewDelivery(){
    this.router.navigate(['/createDelivery']);
  }
}
