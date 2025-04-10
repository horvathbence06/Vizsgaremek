package hu.backend.dto.felhasznalo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FelhasznaloRead {
    private Integer felhasznaloId;
    private String felhasznaloNev;
    private String jelszo;
    private String teljesNev;
    private String telefonszam;
    private String emailCim;
}
