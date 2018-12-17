import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { SongFormComponent } from './song-form/song-form.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaylistFilterComponent } from './playlist-filter/playlist-filter.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlaylistService } from './playlist.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MovielistListComponent } from './movie-list/movie-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ProjectionComponent } from './projection/projection.component';
import { CinemaService } from './cinema.service';
import { Movie } from './model/movie';
import { RegistrationComponent } from './registration/registration.component';
import { UserOutput } from './model/UserOutput';
import { User } from './model/User';
import { AuthGuardService } from './services/AuthGuardService';
import { RoleGuardService } from './services/roleGuardService';
import { RequestInterceptor } from './requestInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    MovielistListComponent,
    ReservationComponent,
    ProjectionComponent,
    PlaylistListComponent,
    SongFormComponent,
    PlaylistFilterComponent,
    SongListComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [PlaylistService,CinemaService,AuthGuardService,RoleGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
