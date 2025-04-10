package hu.backend.dto.szolgaltatas;

import hu.backend.dto.szakterulet.SzakteruletList;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SzolgaltatasList {
    private Integer szolgaltatasId;
    private String szolgaltatasNev;
    private SzakteruletList szakterulet;
    private Integer ar;
}
