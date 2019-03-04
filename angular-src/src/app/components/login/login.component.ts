import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	name: String;
	password: String;

  constructor(private authService:AuthService,
  			  private router:Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLoginSubmit(){
  	const user = {
  		name: this.name,
  		password: this.password
  	}

  	this.authService.authenticateUser(user).subscribe(data =>{
  		if(data.success){
  			this.authService.storeUserData(data.token, data.user);
  			this.router.navigate(['/dashboard']);
  		}
  		else{
  			console.log(data.msg);
  		}
  	});
  }

}
