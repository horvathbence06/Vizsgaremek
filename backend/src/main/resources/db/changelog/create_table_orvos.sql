CREATE TABLE IF NOT EXISTS Orvos
(
    `orvos_id`       INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nev`            VARCHAR(45) NOT NULL,
    `kep_nev`        VARCHAR(45) NOT NULL,
    `szakterulet_id` INT         NOT NULL,
    `email`          VARCHAR(45) NOT NULL,
    `telefonszam`    VARCHAR(45) NOT NULL,
    `korhaz_id`      INT         NOT NULL,

    FOREIGN KEY (szakterulet_id) REFERENCES Szakterulet(szakterulet_id),
    FOREIGN KEY (korhaz_id) REFERENCES Korhaz(korhaz_id)
);