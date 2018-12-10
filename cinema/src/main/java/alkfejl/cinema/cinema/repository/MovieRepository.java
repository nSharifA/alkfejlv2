package alkfejl.cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import alkfejl.cinema.cinema.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

	public Optional<Movie> findById(Integer id);
}
