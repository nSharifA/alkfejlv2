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

import alkfejl.cinema.cinema.model.Chair;
import alkfejl.cinema.cinema.repository.ChairRepository;

@RestController
@RequestMapping("/chair")
public class ChairController {
	@Autowired
	private ChairRepository chairRepository;
	
	@GetMapping("/{id}")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<Chair> getByid ( @PathVariable Integer id ) {
		return ResponseEntity.ok(chairRepository.findById(id).get());
	}
	
	@GetMapping("")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<List<Chair>> getAll () {
		return ResponseEntity.ok(chairRepository.findAll());
	}
	
	@DeleteMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Chair>> deleteReservation( @PathVariable Integer id ) {

		try {
			chairRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Chair> createProjection ( @RequestBody Chair chair ) {

		return ResponseEntity.ok(chairRepository.save(chair));
	}
	
	@PutMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Chair> updateProjection ( @RequestBody Chair chair ) {

		return ResponseEntity.ok(chairRepository.save(chair));
	}
}
