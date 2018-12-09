import { Component, OnInit, OnDestroy } from '@angular/core';

import { Playlist } from '../model/Playlist';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent
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
   /* this.playlistItems = this.playlistService
      .filter(filterText);
    this.submitted = true;*/
  }

}
