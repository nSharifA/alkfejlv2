package alkfejl.cinema.cinema.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Movie {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	private String name;
	
	private String director;
	@Column(name = "main_actors")
	private String mainActors;
	@OneToOne
	@JoinColumn(name = "projection")
	private Projection projection;
}
