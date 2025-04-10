CREATE TABLE IF NOT EXISTS Allocate
(
    allocate_id   INT         NOT NULL PRIMARY KEY AUTO_INCREMENT,
    felhasznalo_id       INT         NOT NULL,
    permission_id VARCHAR(30) NOT NULL ,

    FOREIGN KEY (felhasznalo_id) REFERENCES Felhasznalo (felhasznalo_id),
    FOREIGN KEY (permission_id) REFERENCES Permission (permission_id)
);