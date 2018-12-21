import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User';

@Injectable()
export class RoleGuardService implements CanActivate,CanActivateChild {
   
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const roles = localStorage.getItem('role');
    // decode the token to get its payload
    
    
      if (this.auth.isAuthenticated() && roles == expectedRole) {
        return true;
      }else{
        this.router.navigate(['/']);
      }
      //this.router.navigate(['login']);
      
      return false;
     
    }
    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      const expectedRole = route.data.expectedRole;
      const roles = localStorage.getItem('role');
      if (this.auth.isAuthenticated() && roles == expectedRole) {
        return true;
      }
      //this.router.navigate(['login']);
      return false;
    }
}