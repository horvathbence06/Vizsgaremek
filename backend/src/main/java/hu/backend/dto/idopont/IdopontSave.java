package hu.backend.dto.idopont;

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
    private String foglaloNeve;
    private String foglaloTelefonszama;
    private String foglaloEmailCim;
    private Integer orvosId;
    private Integer korhazId;
    private Integer szolgaltatasId;
}
