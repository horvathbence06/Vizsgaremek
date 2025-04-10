package hu.backend.dto.szakterulet;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SzakteruletRead {
    private Integer szakteruletId;
    private String szakteruletNev;
}
