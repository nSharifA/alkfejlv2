import { Component, OnInit, OnDestroy } from '@angular/core';

import { Playlist } from '../model/Playlist';
import { CinemaService } from '../cinema.service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent
  implements OnInit, OnDestroy {

  submitted: boolean = false;
  reservationList: Reservation[];
  selectedID:number;
  constructor(
    public cinemaService: CinemaService
  ) { }

  ngOnInit() {
    this.cinemaService.getAllReservation().subscribe( data => {
      this.reservationList = data;
    });
  }

  ngOnDestroy() {
  }

  setSelected(id:number){
    this.selectedID=id;
    
  }
  
}
