import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProjectionService } from './services/ProjectionService';



@NgModule({
  declarations: [
    AppComponent,
    MovielistListComponent,
    ReservationComponent,
    ProjectionComponent,
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
  providers: [ProjectionService,CinemaService,AuthGuardService,RoleGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
