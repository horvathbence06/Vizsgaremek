package hu.backend.dto.korhaz;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class KorhazSave {
    private String korhazNev;
    private String korhazCim;
}
