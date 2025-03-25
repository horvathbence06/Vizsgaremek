import { Box, Typography, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { IdopontContext } from "./IdopontContext";
import axios from "axios";

function OrvosValaszto() {
    const { orvosok, selectedKorhaz, selectedSzolgaltatas, setSelectedOrvos, setOrvosok, setSelectedSzolgaltatas } = useContext(IdopontContext);

    useEffect(() => {
        if (selectedKorhaz && selectedSzolgaltatas) {
            axios
                .get(`http://localhost:8080/orvos/filter/by-korhaz-and-szakterulet?korhazId=${selectedKorhaz.korhazId}&szakteruletId=${selectedSzolgaltatas.szakterulet.szakteruletId}`)
                .then((response) => {
                    setOrvosok(response.data);
                })
                .catch((error) => {
                    console.error("Hiba a lekérdezés során:", error);
                });
        }
    }, [selectedKorhaz, selectedSzolgaltatas, setOrvosok]);

    return (
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "#0d0d0dff", marginBottom: "10px", fontWeight: "bold" }}>
                {selectedKorhaz.korhazNev} kórházban elérhető orvosok:
            </Typography>
            {orvosok.map((orvos) => (
                <Button
                    onClick={() => setSelectedOrvos(orvos)}
                    key={orvos.orvosId}
                    variant="h6"
                    sx={{
                        color: "#0d0d0dff",
                        textTransform: "none",
                        backgroundColor: "#0d0d0dff",
                        color: "#9c7b48ff",
                        borderRadius: "10px",
                        textAlign: "center",
                        padding: "10px",
                        margin: "5px"
                    }}
                >
                    {orvos.nev}
                </Button>
            ))}
            <br />
            <Button
                sx={{
                    marginTop: "2vh",
                    backgroundColor: "#9c7b48ff",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#7a5a30",
                    },
                }}
                onClick={() => setSelectedSzolgaltatas(null)}>
                Vissza</Button>
        </Box>
    );
}

export default OrvosValaszto;