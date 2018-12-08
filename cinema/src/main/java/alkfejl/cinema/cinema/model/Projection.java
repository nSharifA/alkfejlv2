package alkfejl.cinema.cinema.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Projection {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@OneToOne(mappedBy = "projection", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Reservation reservation;
	@OneToOne
	@JoinColumn(name = "room")
	private Room room;
	@OneToOne(mappedBy = "projection", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Movie movie;
}
