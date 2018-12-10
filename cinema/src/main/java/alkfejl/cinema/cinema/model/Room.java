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

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Data
@Entity
public class Room {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	
	@Column(name = "name")
	private String name;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHeadCount() {
		return headCount;
	}

	public void setHeadCount(int headCount) {
		this.headCount = headCount;
	}

	public List<Chair> getChair() {
		return chair;
	}

	public void setChair(List<Chair> chair) {
		this.chair = chair;
	}

	public Projection getProjection() {
		return projection;
	}

	public void setProjection(Projection projection) {
		this.projection = projection;
	}

	@Column(name = "head_count")
	private int headCount;
	@JsonManagedReference
	@OneToMany(mappedBy = "room")
	private List<Chair> chair;
	@JsonManagedReference
	@OneToOne(mappedBy = "room", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Projection projection;
}
