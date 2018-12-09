import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaylistListComponent } from '../playlist-list/playlist-list.component';
import { SongFormComponent } from '../song-form/song-form.component';
import { SongListComponent } from '../song-list/song-list.component';
import { LoginComponent } from '../login/login.component';
import { MovielistListComponent } from '../movie-list/movie-list.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ProjectionComponent } from '../projection/projection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movie',
    pathMatch: 'full',
  },
  {
    path:'movie',
    component:MovielistListComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'projection',
    component: ProjectionComponent,
  },
  {
    path: 'playlist/:id/songs/new',
    component: SongFormComponent,
  },
  {
    path: 'playlist/:id',
    component: SongListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: [],
})
export class RoutingModule { }