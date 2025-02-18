package hu.backend.dto.orvos;

import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.szakterulet.SzakteruletRead;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrvosRead {
    private Integer orvosId;
    private String nev;
    private String kepNev;
    private SzakteruletRead szakterulet;
    private String email;
    private String telefonszam;
    private KorhazRead korhaz;
}
