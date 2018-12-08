package alkfejl.cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import alkfejl.cinema.cinema.model.Chair;


public interface ChairRepository extends JpaRepository<Chair, Integer> {
	public Optional<Chair> findById(Integer id);
}
