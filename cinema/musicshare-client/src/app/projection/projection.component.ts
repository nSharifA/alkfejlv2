import { Component, OnInit, OnDestroy } from '@angular/core';

import { Playlist } from '../model/Playlist';

@Component({
  selector: 'app-projection-list',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent
  implements OnInit, OnDestroy {

  submitted: boolean = false;
  playlistItems: Playlist[];

  constructor(
  
  ) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {
    /*this.playlistItems = this.playlistService
      .filter(filterText);
    this.submitted = true;*/
  }

}
