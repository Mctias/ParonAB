import { Component, OnInit } from '@angular/core';
import {LagerService} from '../../services/lager.service';
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

  constructor(private lagerService:LagerService,
  			  private router:Router) { }

  ngOnInit() {
  }
  onCreateLager(){
  	const lager = {
  		name: this.name
  	}
  	this.lagerService.createLager(lager).subscribe(data=>{
  		if(data.success){
  			console.log('Lager added!');
  			this.router.navigate(['/dashboard']);
  		}
  		else{
  			console.log(data.msg);
  		}
  	});
  }
}
