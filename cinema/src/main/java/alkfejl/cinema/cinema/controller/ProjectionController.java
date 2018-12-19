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

import alkfejl.cinema.cinema.model.Projection;
import alkfejl.cinema.cinema.repository.ProjectionRepository;

@RestController
@RequestMapping("/projection")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectionController {
	@Autowired
	private ProjectionRepository projectionRepository;
	
	
	 @GetMapping("/{id}")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<Projection> getByid ( @PathVariable Integer id ) {
		return ResponseEntity.ok(projectionRepository.findById(id).get());
	}
	
	@GetMapping("")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<List<Projection>> getAll () {
		return ResponseEntity.ok(projectionRepository.findAll());
	}
	
	@DeleteMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Projection>> deleteProjection( @PathVariable Integer id ) {

		try {
			projectionRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Projection> createProjection ( @RequestBody Projection projection ) {

		return ResponseEntity.ok(projectionRepository.save(projection));
	}
	 
	@PutMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Projection> updateProjection ( @RequestBody Projection projection ) {

		return ResponseEntity.ok(projectionRepository.save(projection));
	}
}
