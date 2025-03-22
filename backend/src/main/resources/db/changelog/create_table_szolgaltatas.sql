CREATE TABLE IF NOT EXISTS Szolgaltatas
(
    `szolgaltatas_id`  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `szolgaltatas_nev` VARCHAR(45)     NOT NULL,
    `szakterulet_id`   INT             NOT NULL,
    `ar`               INT             NOT NULL,

    FOREIGN KEY (szakterulet_id) REFERENCES Szakterulet (szakterulet_id)
);