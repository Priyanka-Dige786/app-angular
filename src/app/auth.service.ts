import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
 {
  constructor(private router: Router) 
  { }


  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    //throw new Error("Method not implemented.");
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
 
  isLoggedIn()
  {
    if(window.sessionStorage.getItem("active") != null
     &&
      window.sessionStorage.getItem("active")== "1")
      {
            return true;
      }
      else
      {
        return false;
      }
  }

  CheckUser(userdetails)
  {
   if(userdetails.uname == "abc"
   &&
   userdetails.password == "abc@123")
   {
     window.sessionStorage.setItem("active", "1");
     return true;
   }
   else
   {
     return false;
   }
  }

  SignOut()
  {
    window.sessionStorage.setItem("active", "0");
  }

 }