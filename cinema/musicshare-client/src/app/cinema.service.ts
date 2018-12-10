import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from './model/Playlist';
import { Song } from './model/Song';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { Reservation } from './model/reservation';
export const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Request-Method': 'GET',
      
    })
  };
@Injectable()
export class CinemaService {

    movies:Movie[] = [];
    movie:Movie;

  constructor(
    private httpClient: HttpClient
  ) { }
      public getById(id:number){
        return this.httpClient.get<Movie>('http://localhost:8080/movie/' + id);
      }
      public allMovies(){
        return this.httpClient.get<Movie[]>('http://localhost:8080/movie/all');
      }
      public getAllReservation(){
        return this.httpClient.get<Reservation[]>('http://localhost:8080/reservation');
      }
     
}
