import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaServiceService } from 'src/pizza-service.service';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private pizza:PizzaServiceService,private router:Router, private auth:AuthService)
  {}

  loginformdata:any=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl()
  })

  responseData:any;
  sendLoginData(){
    this.pizza.loginvalidation(this.loginformdata.value).subscribe({
      next :response =>
    {
      this.responseData = response;
      localStorage.setItem("jwt", this.responseData.token);
      localStorage.setItem("role", this.responseData.role);
      localStorage.setItem("email", this.responseData.email);
      localStorage.setItem("password", this.responseData.password);
      if(this.responseData.role=="Customer"){
        this.auth.login();
        this.router.navigateByUrl("/home")
      }
    },
    error : error => {
      alert("Invalid Credentials");
    }
      });
  }

  movetosignup()
  {
    this.router.navigateByUrl("/signup")
  }
  movetologinpage()
  {

    this.router.navigateByUrl("/login")
  }

  movetohomepage()
  {
    this.router.navigateByUrl("/home")
  }
  movetoorderpage()
  {

    this.router.navigateByUrl("/order")
  }

}
