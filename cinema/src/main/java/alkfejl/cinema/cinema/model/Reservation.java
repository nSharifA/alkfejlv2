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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Data
@Entity
public class Reservation {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@JsonBackReference
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "projection")
	private Projection projection;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "reservation")
	private List<Chair> chair;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Projection getProjection() {
		return projection;
	}

	public void setProjection(Projection projection) {
		this.projection = projection;
	}

	public List<Chair> getChair() {
		return chair;
	}

	public void setChair(List<Chair> chair) {
		this.chair = chair;
	}
}
