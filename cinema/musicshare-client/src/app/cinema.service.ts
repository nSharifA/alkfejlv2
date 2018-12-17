import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from './model/Playlist';
import { Song } from './model/Song';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { Reservation } from './model/reservation';
import { User } from './model/User';
import { UserOutput } from './model/UserOutput';
export const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Request-Method': 'GET',
      
    })
  };
@Injectable()
export class CinemaService {

    
  constructor(
    private httpClient: HttpClient
  ) { }
      public getById(id:number):Observable<Movie>{
        return this.httpClient.get<Movie>('http://localhost:8080/movie/' + id);
      }
      public allMovies(){
        return this.httpClient.get<Movie[]>('http://localhost:8080/movie/all');
      }
      public getAllReservation(){
        return this.httpClient.get<Reservation[]>('http://localhost:8080/reservation');
      }

      public createUser(user:UserOutput):Observable<User>{
        
        return this.httpClient.post<User>('http://localhost:8080/users',user);
      }
    
}
