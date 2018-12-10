import { Movie } from "./movie";
import { Room } from "./Room";
import { Reservation } from "./reservation";

export class Projection {
    id: number;
    reservation:Reservation;
    room: Room;
    movie: Movie;
}
