package alkfejl.cinema.cinema.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import alkfejl.cinema.cinema.model.Movie;
import alkfejl.cinema.cinema.repository.MovieRepository;

@RestController
@RequestMapping("/movie")
public class MovieController {

	@Autowired
	private MovieRepository movierRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	@Secured({ "ROLE_USER" })
	@Transactional
	public ResponseEntity<Movie> getByid(@PathVariable Integer id) {
		return ResponseEntity.ok(movierRepository.findById(id).get());
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/all")
	@Secured({ "ROLE_USER" })
	@Transactional
	public ResponseEntity<Iterable<Movie>> getAll() {
		return ResponseEntity.ok(movierRepository.findAll());
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/{id}")
	@Secured({ "ROLE_USER" })
	public void deleteMovie(@PathVariable Integer id) {

		movierRepository.deleteById(id);

	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/create")
	@ResponseBody
	@Secured({ "ROLE_USER" })
	public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {

		return ResponseEntity.ok(movierRepository.save(movie));
	}

	@PutMapping("")
	@Secured({ "ROLE_ADMIN" })
	public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie) {

		return ResponseEntity.ok(movierRepository.save(movie));
	}
}
