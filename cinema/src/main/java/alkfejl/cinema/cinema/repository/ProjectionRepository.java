package alkfejl.cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import alkfejl.cinema.cinema.model.Projection;


public interface ProjectionRepository extends JpaRepository<Projection, Integer> {
	public Optional<Projection> findById(Integer id);
}
