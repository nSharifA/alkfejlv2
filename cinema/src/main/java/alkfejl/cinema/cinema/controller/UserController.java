package alkfejl.cinema.cinema.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import alkfejl.cinema.cinema.model.User;
import alkfejl.cinema.cinema.repository.UserRepository;
import alkfejl.cinema.cinema.security.AuthenticatedUser;

@RestController
@RequestMapping("/users")
public class UserController {

	 @Autowired
	    private UserRepository userRepository;

	    @Autowired
	    private AuthenticatedUser authenticatedUser;

	    @GetMapping("")
	    @Secured({ "ROLE_USER" })
	    public Iterable<User> getAll() {
	        return userRepository.findAll();
	    }

	    @GetMapping("/{id}")
	    @Secured({ "ROLE_USER" })
	    public ResponseEntity<User> get(@PathVariable Integer id) {
	        Optional<User> user = userRepository.findById(id);
	        if (user.isPresent()) {
	            return ResponseEntity.ok(user.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @PostMapping("login")
	    public ResponseEntity<User> login() {
	        return ResponseEntity.ok(authenticatedUser.getUser());
	    }

	    @Autowired
	    private BCryptPasswordEncoder passwordEncoder;

	    @PostMapping("")
	    public ResponseEntity<User> create(@RequestBody User user) {
	        Optional<User> oUser = userRepository.findByUserName(user.getUserName());
	        if (oUser.isPresent()) {
	            return ResponseEntity.badRequest().build();
	        }
	        user.setPassword(passwordEncoder.encode(user.getPassword()));
	        user.setRole(User.Role.ROLE_USER);
	        return ResponseEntity.ok(userRepository.save(user));
	    }
}
