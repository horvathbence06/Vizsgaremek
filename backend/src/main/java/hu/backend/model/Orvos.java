package hu.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Orvos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orvosId;
    private String nev;
    private String kepNev;
    @ManyToOne
    @JoinColumn(name="szakterulet_id")
    private Szakterulet szakterulet;
    private String email;
    private String telefonszam;
    @ManyToOne
    @JoinColumn(name="korhaz_id")
    private Korhaz korhaz;
}
