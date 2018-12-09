package alkfejl.cinema.cinema.model;

import java.util.List;

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
public class Reservation {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "projection")
	private Projection projection;
	
	@OneToMany(mappedBy = "reservation")
	private List<Chair> chair;
}
