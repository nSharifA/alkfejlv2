import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../model/Playlist';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovielistListComponent
  implements OnInit, OnDestroy {

  submitted: boolean = false;
  playlistItems: Playlist[];

  constructor(
    public playlistService: PlaylistService
  ) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
  }

  filter(filterText: string) {
    this.playlistItems = this.playlistService
      .filter(filterText);
    this.submitted = true;
  }

}
