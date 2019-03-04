import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name: String;
	email: String;
	password: String; 

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    //console.log('lololol');
  	const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    console.log('ute');
    this.authService.registerUser(user).subscribe(data => {
      console.log('inne');
      if(data.success){
        console.log('Registered user');
        this.router.navigate(['/dashboard']);
      }
      else{
        console.log('fuckup');
      }
    });
  }
}
