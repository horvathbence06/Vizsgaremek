package hu.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Szolgaltatas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer szolgaltatasId;
    private String szolgaltatasNev;
    @ManyToOne
    @JoinColumn(name="szakterulet_id")
    private Szakterulet szakterulet;
    private Integer ar;
}
