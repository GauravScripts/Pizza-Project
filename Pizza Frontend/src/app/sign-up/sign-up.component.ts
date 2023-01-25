import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaServiceService } from 'src/pizza-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private pizza:PizzaServiceService,private router:Router) {}

  signupformdata:any = new FormGroup(
    {
      name:new FormControl(),
      emailId:new FormControl(),
      password:new FormControl(),
      phoneNo: new FormControl(),
      address:new FormControl()

    }
  )

  sendsignupdata()
  {
    alert("hello")
    this.pizza.registercustomer(this.signupformdata.value).subscribe(data=>console.log(data));
  }

  movetosignup()
  {
    this.router.navigateByUrl("/signup")
  }
  movetologinpage()
  {
    alert("hello")
    this.router.navigateByUrl("/login")
  }

  movetohomepage()
  {
    this.router.navigateByUrl("/home")
  }
  movetoorderpage()
  {
    alert("hello")
    this.router.navigateByUrl("/order")
  }
}
