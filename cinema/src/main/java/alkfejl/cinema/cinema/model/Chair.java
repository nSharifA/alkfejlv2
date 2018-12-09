package alkfejl.cinema.cinema.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Chair {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "reservation")
	private Reservation reservation;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "room")
	private Room room;
	
	private int row;
	
	private int cloumn;
}
