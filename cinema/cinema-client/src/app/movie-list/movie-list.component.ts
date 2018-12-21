import { Component, OnInit, OnDestroy } from '@angular/core';

import { Movie } from '../model/movie';
import { CinemaService } from '../cinema.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { flatten } from '@angular/core/src/render3/util';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovielistListComponent
  implements OnInit {
 private  updateMark:boolean;
 private form: any;
  submitted: boolean = false;
  selectedID:number;
  private movies: Movie[];
  private selectedMovie:Movie;
  selected:boolean;
  isAdmin:boolean = localStorage.getItem("role") == "ROLE_ADMIN"?true:false;
  constructor(
    public cinemaService: CinemaService, private router: Router,private fb: FormBuilder,
  ) { 
    this.form = this.fb.group({
      movieName: ['', [Validators.required]],
      mainActors: ['', [Validators.required]],
      director: ['', [Validators.required]],
     
    });
    
  }
  get movieName() { return this.form.get('movieName'); }
  get mainActors() { return this.form.get('mainActors'); }
  get director() { return this.form.get('director'); }
  

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
  updates(id:number){
    this.updateMark = true;
    this.selectedID=this.movies[id].id;
    this.cinemaService.getById(this.selectedID) .subscribe( data => {
      this.selectedMovie = data;
      this.form.patchValue({
        movieName:data.name,
        mainActors:data.mainActors,
        director: data.director
      });
    });
  }
  onSubmit(){
    this.selectedMovie.name=this.form.controls['movieName'].value;
    this.selectedMovie.mainActors=this.form.controls['mainActors'].value;
    this.selectedMovie.director=this.form.controls['director'].value;
   this.cinemaService.updateMovie( this.selectedMovie).subscribe(data=>{
    this.updateMark = false;
    this.formRefres();
   });

  }
  deleteMovie(){
    this.cinemaService.deleteMovie(this.selectedMovie.id).subscribe(data=>{
      alert("Sikeresen törölte a filmet");
      this.selected=false;
      this.formRefres();
    });
  }
  closePopup(){
    this.selected=false;
  }
}
