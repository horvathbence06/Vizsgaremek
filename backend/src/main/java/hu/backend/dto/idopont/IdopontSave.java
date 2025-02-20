package hu.backend.dto.idopont;

import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.szolgaltatas.SzolgaltatasList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IdopontSave {
    private LocalDateTime ido;
    private Integer felhasznaloId;
    private Integer orvosId;
    private Integer korhazId;
    private Integer szolgaltatasId;
}
