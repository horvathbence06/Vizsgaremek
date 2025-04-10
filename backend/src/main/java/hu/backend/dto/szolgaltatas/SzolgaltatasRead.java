package hu.backend.dto.szolgaltatas;

import hu.backend.dto.szakterulet.SzakteruletRead;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SzolgaltatasRead {
    private Integer szolgaltatasId;
    private String szolgaltatasNev;
    private SzakteruletRead szakterulet;
    private Integer ar;
}
