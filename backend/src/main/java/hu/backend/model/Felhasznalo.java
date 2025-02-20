package hu.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Felhasznalo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer felhasznaloId;
    private String felhasznaloNev;
    private String jelszo;
    private String teljesNev;
    private Boolean admin;
}
