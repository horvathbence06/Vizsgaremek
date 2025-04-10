CREATE TABLE IF NOT EXISTS Idopont
(
    `idopont_id`           INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `ido`                  DATETIME     NOT NULL,
    `foglalo_neve`         VARCHAR(100) NOT NULL,
    `foglalo_telefonszama` VARCHAR(50) NOT NULL,
    `foglalo_email_cim`         VARCHAR(50) NOT NULL,
    `orvos_id`             INT          NOT NULL,
    `korhaz_id`            INT          NOT NULL,
    `szolgaltatas_id`      INT          NOT NULL,

    FOREIGN KEY (orvos_id) REFERENCES Orvos(orvos_id),
    FOREIGN KEY (korhaz_id) REFERENCES Korhaz(korhaz_id),
    FOREIGN KEY (szolgaltatas_id) REFERENCES Szolgaltatas(szolgaltatas_id)
);