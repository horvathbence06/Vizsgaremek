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
public class SzolgaltatasSave {
    private String szolgaltatasNev;
    private Integer szakteruletId;
    private Integer ar;
}
