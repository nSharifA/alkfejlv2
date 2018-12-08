package alkfejl.cinema.cinema.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Room {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "head_count")
	private int headCount;
	
	@OneToMany(mappedBy = "room")
	private List<Chair> chair;
	
	@OneToOne(mappedBy = "room", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Projection projection;
}
