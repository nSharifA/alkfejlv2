import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { Movie } from '../model/movie';
import { Projection } from '../model/projection';
import { ProjectionService } from '../services/ProjectionService';



@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent
  implements OnInit {

 
  selectedID:number;
  private projections: Projection[];
  private selectedProj: Projection;
  selected:boolean;
  
  constructor(
    private projectionService: ProjectionService , private router: Router
  ) { }

  ngOnInit() {
    this.selected=false;
    this.projectionService.projections()
    .subscribe( data => {
      this.projections = data;

    });
  }
  setSelected(id:number){
    this.selected=true;
    this.selectedID=id;
    this.projectionService.getById(id+1) .subscribe( data => {
      this.selectedProj = data;
    
    });
  }
  

}
