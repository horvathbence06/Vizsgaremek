package hu.backend.model;

import jakarta.persistence.*;

import java.security.Permission;

public class Allocate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer allocateId;

    @ManyToOne
    @JoinColumn(name = "felhasznalo_id")
    private Felhasznalo felhasznalo;

    @Enumerated(EnumType.STRING)
    @Column(name = "permission_id")
    private Permission permission;
}
