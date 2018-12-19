import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../model/reservation';
import { Projection } from '../model/projection';
import { Observable } from 'rxjs';


export const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Request-Method': 'GET',
      
    })
  };
@Injectable()
export class ProjectionService {

    
  constructor(
    private httpClient: HttpClient
  ) { }
  public projections(){
    return this.httpClient.get<Projection[]>('http://localhost:8080/projection');
  }

  public getById(id:number):Observable<Projection>{
    return this.httpClient.get<Projection>('http://localhost:8080/projection/' + id);
  }
}
