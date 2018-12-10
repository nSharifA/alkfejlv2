package alkfejl.cinema.cinema.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;

@Data
@Entity
public class Projection {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
	@JsonManagedReference
	@OneToOne(mappedBy = "projection", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Reservation reservation;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Reservation getReservation() {
		return reservation;
	}
	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}
	public Room getRoom() {
		return room;
	}
	public void setRoom(Room room) {
		this.room = room;
	}
	public Movie getMovie() {
		return movie;
	}
	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "room")
	private Room room;
	
	@JsonManagedReference
	@OneToOne(mappedBy = "projection", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY)
	private Movie movie;
}
