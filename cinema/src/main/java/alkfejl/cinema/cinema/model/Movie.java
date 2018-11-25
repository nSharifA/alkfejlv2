package alkfejl.cinema.cinema.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Movie {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	private String name;
	
	private String director;
	
	private Date created;
	
	
}
