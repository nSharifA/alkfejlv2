import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MovielistListComponent } from '../movie-list/movie-list.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ProjectionComponent } from '../projection/projection.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthGuardService as AuthGuard} from '../services/AuthGuardService';
import { RoleGuardService as RoleGuard } from '../services/roleGuardService';
import { MovieComponent } from '../movie-list/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'movie',
    component:MovielistListComponent,
    canActivate: [AuthGuard,RoleGuard],
    data:{
      expectedRole:'ROLE_USER'
    }
    
  },
  {
    path:'createMovie',
    component:MovieComponent,
    canActivate: [AuthGuard,RoleGuard],
    data:{
      expectedRole:'ROLE_USER'
    }
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [AuthGuard,RoleGuard],
    data: { 
      expectedRole:'ROLE_USER'
    } 
  },
  {
    path: 'projection',
    component: ProjectionComponent,
    canActivate: [AuthGuard,RoleGuard],
    data: { 
      expectedRole:'ROLE_USER'
    } 
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: [],
})
export class RoutingModule { }