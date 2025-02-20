package hu.backend.dto.velemeny;

import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.orvos.OrvosRead;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VelemenyRead {
    private Integer velemenyId;
    private String velemenyText;
    private FelhasznaloRead felhasznalo;
    private OrvosRead orvos;
    private LocalDateTime bejegyzesIdo;
}
