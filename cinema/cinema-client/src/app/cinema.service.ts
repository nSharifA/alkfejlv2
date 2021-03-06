import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from './model/Song';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
import { Reservation } from './model/reservation';
import { User } from './model/User';
import { UserOutput } from './model/UserOutput';
import { MovieOutput } from './model/movieOutput';
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
      
      public createMovie(movie:MovieOutput):Observable<Movie>{
        return this.httpClient.post<Movie>('http://localhost:8080/movie/create', movie);
      }
      public updateMovie(movie:Movie):Observable<Movie>{
        return this.httpClient.put<Movie>('http://localhost:8080/movie', movie);
      }
      public deleteMovie(id:number): Observable<{}>{
        return this.httpClient.delete('http://localhost:8080/movie/'+ id);
      }
      public createUser(user:UserOutput):Observable<User>{
        
        return this.httpClient.post<User>('http://localhost:8080/users',user);
      }

    
}
