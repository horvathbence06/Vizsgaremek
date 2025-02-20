package hu.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Velemeny {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer velemenyId;
    private String velemenyText;
    @ManyToOne
    @JoinColumn(name = "felhasznalo_id")
    private Felhasznalo felhasznalo;
    @ManyToOne
    @JoinColumn(name = "orvos_id")
    private Orvos orvos;
    private LocalDateTime bejegyzesIdo;
}
