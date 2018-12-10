package alkfejl.cinema.cinema.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import alkfejl.cinema.cinema.model.Reservation;
import alkfejl.cinema.cinema.repository.ReservationRepository;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
	@Autowired
	private ReservationRepository reservationRepository;
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	//@Secured({ "ROLE_USER" })
	public ResponseEntity<Reservation> getByid ( @PathVariable Integer id ) {
		return ResponseEntity.ok(reservationRepository.findById(id).get());
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("")
	//@Secured({ "ROLE_USER" })
	public ResponseEntity<List<Reservation>> getAll () {
		return ResponseEntity.ok(reservationRepository.findAll());
	}
	
	@DeleteMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Reservation>> deleteReservation( @PathVariable Integer id ) {

		try {
			reservationRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Reservation> createProjection ( @RequestBody Reservation reservation ) {

		return ResponseEntity.ok(reservationRepository.save(reservation));
	}
	
	@PutMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Reservation> updateProjection ( @RequestBody Reservation reservation ) {

		return ResponseEntity.ok(reservationRepository.save(reservation));
	}
}
