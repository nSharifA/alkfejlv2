package alkfejl.cinema.cinema.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import alkfejl.cinema.cinema.model.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
