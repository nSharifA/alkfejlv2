import { Component, OnInit, OnDestroy } from '@angular/core';

import { Movie } from '../model/movie';
import { CinemaService } from '../cinema.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { flatten } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovielistListComponent
  implements OnInit {

  submitted: boolean = false;
  selectedID:number;
  private movies: Movie[];
  private selectedMovie:Movie;
  selected:boolean;
  isAdmin:boolean = localStorage.getItem("role") == "ROLE_ADMIN"?true:false;
  constructor(
    public cinemaService: CinemaService, private router: Router
  ) { }

  ngOnInit() {
    this.selected=false;
    this.formRefres();
  }
  formRefres(){
    this.cinemaService.allMovies()
    .subscribe( data => {
      this.movies = data;
    });
  }

  setSelected(id:number){
    this.selected=true;
    this.selectedID=this.movies[id].id;
    this.cinemaService.getById(this.selectedID) .subscribe( data => {
      this.selectedMovie = data;
    
    });
   
  } 
  deleteMovie(){
    this.cinemaService.deleteMovie(this.selectedMovie.id).subscribe(data=>{
      alert("Sikeresen törölte a filmet");
      this.selected=false;
      this.formRefres();
    });
  }
}
