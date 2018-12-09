package alkfejl.cinema.cinema.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import alkfejl.cinema.cinema.model.Room;


public interface RoomRepository extends JpaRepository<Room, Integer> {
	public Optional<Room> findById(Integer id);
}
