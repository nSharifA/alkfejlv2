import { Component, OnInit, OnDestroy } from '@angular/core';
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
    
  }

  ngOnDestroy() {
  }

  setSelected(id:number){
    this.selectedID=id;
    
  }
  
}
