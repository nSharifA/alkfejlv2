package alkfejl.cinema.cinema.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import alkfejl.cinema.cinema.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findByUserName(String username);
}
