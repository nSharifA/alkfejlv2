import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistListComponent } from '../playlist-list/playlist-list.component';
import { SongFormComponent } from '../song-form/song-form.component';
import { SongListComponent } from '../song-list/song-list.component';
import { LoginComponent } from '../login/login.component';
import { MovielistListComponent } from '../movie-list/movie-list.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ProjectionComponent } from '../projection/projection.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthGuardService as AuthGuard} from '../services/AuthGuardService';
import { RoleGuardService as RoleGuard } from '../services/roleGuardService';

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