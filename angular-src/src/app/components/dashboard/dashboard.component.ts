import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {LagerService} from '../../services/lager.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	name: String;
  lagers: any;
  chart: any;

  constructor(private productService: ProductService,
              private lagerService: LagerService) { }

  ngOnInit() {
    this.lagerService.getLager().subscribe(lager =>{
      this.lagers = lager;
      console.log(lager);
    },err => {
      console.log(err);
    });

  }
  
 
}
