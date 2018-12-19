import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/User';

@Injectable()
export class RoleGuardService implements CanActivate {
   
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const roles = localStorage.getItem('role');
    // decode the token to get its payload
    
    
      if (this.auth.isAuthenticated() && roles == expectedRole) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
     
    }
}