CREATE TABLE IF NOT EXISTS Korhaz
(
    `korhaz_id`  INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `korhaz_nev` VARCHAR(45) NOT NULL,
    `kep_nev`    VARCHAR(45) NOT NULL,
    `korhaz_cim` VARCHAR(45) NOT NULL
);