package hu.backend.dto.idopont;

import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.szolgaltatas.SzolgaltatasRead;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IdopontRead {
    private Integer idopontId;
    private LocalDateTime ido;
    private FelhasznaloRead felhasznalo;
    private OrvosRead orvos;
    private KorhazRead korhaz;
    private SzolgaltatasRead szolgaltatas;
}
