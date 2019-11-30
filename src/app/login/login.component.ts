import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails = 
                {
                  uname : "",
                  password : ""
                }
  constructor(private authService: AuthService,
              private router: Router)
   {
       }

  ngOnInit() {
  }
  message;
  SignIn()
  {
 let isvalid = this.authService.CheckUser(this.userdetails);
 if(isvalid)
 {
  this.router.navigate(['home']);
 }
 else
 {
 this.message = "UName / Pwd is wrong";
 }
  }
}
