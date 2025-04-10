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
        <Box sx={{ marginTop: "20px", textAlign: "center", width: { xs: "90%", md: "100%" }, padding: { xs: "10px", md: "0" } }}>
            <Typography variant="h6" sx={{ color: "#0d0d0dff", marginBottom: "10px", fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                {selectedKorhaz.korhazNev} kórházban elérhető orvosok:
            </Typography>
            {orvosok.map((orvos) => (
                <Button
                    onClick={() => setSelectedOrvos(orvos)}
                    key={orvos.orvosId}
                    variant="contained"
                    sx={{
                        color: "#9c7b48ff",
                        textTransform: "none",
                        backgroundColor: "#0d0d0dff",
                        borderRadius: "10px",
                        textAlign: "center",
                        padding: { xs: "8px", md: "10px" }, 
                        margin: "5px",
                        width: { xs: "100%", md: "calc(50% - 10px)" }, 
                        fontSize: { xs: "0.9rem", md: "1rem" } 
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
                    padding: { xs: "8px", md: "10px" }, 
                    fontSize: { xs: "0.9rem", md: "1rem" } 
                }}
                onClick={() => setSelectedSzolgaltatas(null)}>
                Vissza
            </Button>
        </Box>
    );
}

export default OrvosValaszto;