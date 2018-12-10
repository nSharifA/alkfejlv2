import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../model/Playlist';
import { Movie } from '../model/movie';
import { CinemaService } from '../cinema.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovielistListComponent
  implements OnInit, OnDestroy {

  submitted: boolean = false;

  private movies: Movie[] = [];


  constructor(
    public cinemaService: CinemaService
  ) { }

  ngOnInit() {
    this.cinemaService.allMovies() .subscribe((movie: Movie[]) => { movie.forEach(element => {
      console.log(element.name);
     // this.movies.push(element);
    });});
  }

  ngOnDestroy() {
  }


}
