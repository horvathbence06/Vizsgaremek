CREATE TABLE IF NOT EXISTS Felhasznalo (
    felhasznalo_id      INT             NOT NULL    PRIMARY KEY     AUTO_INCREMENT,
    felhasznalo_nev     VARCHAR(50)     NOT NULL,
    jelszo              VARCHAR(200)     NOT NULL,
    teljes_nev          VARCHAR(100)    NOT NULL,
    telefonszam         VARCHAR(50)     NOT NULL,
    email_cim            VARCHAR(50)     NOT NULL
);