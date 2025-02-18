package hu.backend.dto.orvos;

import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.szakterulet.SzakteruletList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrvosList {
    private Integer orvosId;
    private String nev;
    private String kepNev;
    private SzakteruletList szakterulet;
    private String email;
    private String telefonszam;
    private KorhazList korhaz;
}
