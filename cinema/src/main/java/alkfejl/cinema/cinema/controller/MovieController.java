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

import alkfejl.cinema.cinema.model.Movie;
import alkfejl.cinema.cinema.repository.MovieRepository;

@RestController
@RequestMapping("/movie")
public class MovieController {

	@Autowired
	private MovieRepository movierRepository;

	@GetMapping("/{id}")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<Movie> getByid ( @PathVariable Integer id ) {
		return ResponseEntity.ok(movierRepository.findById(id).get());
	}

	@GetMapping("")
	@Secured({ "ROLE_USER" })
	public ResponseEntity<List<Movie>> getAll () {
		return ResponseEntity.ok(movierRepository.findAll());
	}

	@DeleteMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<List<Movie>> deleteMovie( @PathVariable Integer id ) {

		try {
			movierRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	@PostMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Movie> createMovie ( @RequestBody Movie movie ) {

		return ResponseEntity.ok(movierRepository.save(movie));
	}
	@PutMapping
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Movie> updateMovie ( @RequestBody Movie movie ) {

		return ResponseEntity.ok(movierRepository.save(movie));
	}
}
