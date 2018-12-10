package alkfejl.cinema.cinema.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import alkfejl.cinema.cinema.model.Room;
import alkfejl.cinema.cinema.repository.RoomRepository;

@RestController
@RequestMapping("/room")
public class RoomController {
	@Autowired
	private RoomRepository RoomRepository;
	
	@GetMapping("/{id}")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Room> getByid ( @PathVariable Integer id ) {
		return ResponseEntity.ok(RoomRepository.findById(id).get());
	}
	
	@GetMapping("")
	//@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Room>> getAll () {
		return ResponseEntity.ok(RoomRepository.findAll());
	}
	
	@DeleteMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Room>> deleteReservation( @PathVariable Integer id ) {

		try {
			RoomRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Room> createProjection ( @RequestBody Room room ) {

		return ResponseEntity.ok(RoomRepository.save(room));
	}
	
	@PutMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Room> updateProjection ( @RequestBody Room room ) {

		return ResponseEntity.ok(RoomRepository.save(room));
	}
}
