import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';


import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { flatten } from '@angular/core/src/render3/util';
import { Movie } from 'src/app/model/movie';
import { CinemaService } from 'src/app/cinema.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieOutput } from 'src/app/model/movieOutput';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent
  implements OnInit {

  
  selectedID:number;
  private movies: Movie[];
  private selectedMovie:Movie;
  selected:boolean;
  save:boolean;
  private form: any;
  private movie:MovieOutput;
  

  constructor(
    public cinemaService: CinemaService, private router: Router,private fb: FormBuilder
  ) { 
      this.form = this.fb.group({
    MovieName: ['', [Validators.required]],
    director: ['', [Validators.required]],
    mainActors: ['', [Validators.required]],
  });
}

  
  get MovieName() { return this.form.get('MovieName'); }
  get director() { return this.form.get('director'); }
  get mainActors() { return this.form.get('mainActors'); }

  ngOnInit() {
   
  }

  setSelected(id:number){
    this.selected=true;
    this.selectedID=id;
    this.cinemaService.getById(id+1) .subscribe( data => {
      this.selectedMovie = data;
    
    });
   
  } 
  onSubmit() {
    this.movie = new MovieOutput( this.form.controls['MovieName'].value,this.form.controls['director'].value,
    this.form.controls['mainActors'].value);

    this.cinemaService.createMovie(this.movie).subscribe(data=>{
        this.router.navigate(['movie']);
        
    });
  }

}
