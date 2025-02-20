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
public class Idopont {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idopontId;
    private LocalDateTime ido;
    @ManyToOne
    @JoinColumn(name = "felhasznalo_id")
    private Felhasznalo felhasznalo;
    @ManyToOne
    @JoinColumn(name = "orvos_id")
    private Orvos orvos;
    @ManyToOne
    @JoinColumn(name = "korhaz_id")
    private Korhaz korhaz;
    @ManyToOne
    @JoinColumn(name = "szolgaltatas_id")
    private Szolgaltatas szolgaltatas;
}
