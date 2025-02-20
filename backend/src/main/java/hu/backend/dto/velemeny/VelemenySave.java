package hu.backend.dto.velemeny;

import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.orvos.OrvosList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VelemenySave {
    private String velemenyText;
    private Integer felhasznaloId;
    private Integer orvosId;
}
