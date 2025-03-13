package hu.backend.dto.idopont;

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
public class IdopontList {
    private Integer idopontId;
    private LocalDateTime ido;
    private String foglaloNeve;
    private String foglaloTelefonszama;
    private String foglaloEmailCim;
    private OrvosList orvos;
    private KorhazList korhaz;
    private SzolgaltatasList szolgaltatas;
}
