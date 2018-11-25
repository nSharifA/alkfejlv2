package alkfejl.cinema.cinema.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import alkfejl.cinema.cinema.model.Movie;
import alkfejl.cinema.cinema.repository.MovieRepository;

@RestController
@RequestMapping("/movie")
public class MovieController {
	@Autowired
    private MovieRepository movierRepository;

    @GetMapping("/{name}")
    @Secured({ "ROLE_USER" })
    public ResponseEntity<Movie> getAll(@PathVariable String name) {
        return  ResponseEntity.ok(movierRepository.findByName(name).get());
    }
}
