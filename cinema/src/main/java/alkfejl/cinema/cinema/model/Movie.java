package alkfejl.cinema.cinema.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;

@Data
@Entity
public class Movie{
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	@Column(name = "name")
	private String name;
	@Column(name = "director")
	private String director;
	@Column(name = "main_actors")
	private String mainActors;
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
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getMainActors() {
		return mainActors;
	}
	public void setMainActors(String mainActors) {
		this.mainActors = mainActors;
	}
	public Projection getProjection() {
		return projection;
	}
	public void setProjection(Projection projection) {
		this.projection = projection;
	}
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "projection")
	private Projection projection;
}
