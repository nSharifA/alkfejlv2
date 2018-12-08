package alkfejl.cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import alkfejl.cinema.cinema.model.Movie;


public interface MovieRepository extends JpaRepository<Movie, Integer> {

	public Optional<Movie> findById(Integer id);
}
