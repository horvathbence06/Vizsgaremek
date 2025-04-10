package hu.backend.dto.orvos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrvosSave {
    private String nev;
    private String kepNev;
    private Integer szakteruletId;
    private String email;
    private String telefonszam;
    private Integer korhazId;
}
