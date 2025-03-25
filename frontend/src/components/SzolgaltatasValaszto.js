import { Box, Typography, Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { IdopontContext } from "./IdopontContext";
import axios from "axios";

function SzolgaltatasValaszto() {
    const { selectedKorhaz, setSelectedSzolgaltatas, setSzolgaltatasok, szolgaltatasok, setSelectedKorhaz } = useContext(IdopontContext);

    useEffect(() => {
        if (selectedKorhaz) {
            axios
                .get(`http://localhost:8080/szolgaltatas/list-all`)
                .then((response) => {
                    setSzolgaltatasok(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [selectedKorhaz, setSzolgaltatasok]);

    return (
        <Box
            sx={{
                marginTop: '120px',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                maxWidth: "800px",
            }}
        >
            <Typography variant="h4" sx={{ color: "#0d0d0dff", marginBottom: "10px", fontWeight: "bold" }}>
                {selectedKorhaz.korhazNev} szolgáltatásai:
            </Typography>
            {szolgaltatasok.length > 0 ? (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "10px",
                        width: "100%",
                    }}
                >
                    {szolgaltatasok.map((szolgaltatas) => (
                        <Button
                            key={szolgaltatas.szolgaltatasId}
                            onClick={() => setSelectedSzolgaltatas(szolgaltatas)}
                            sx={{
                                padding: "10px",
                                backgroundColor: "#0d0d0dff",
                                color: "#9c7b48ff",
                                borderRadius: "10px",
                                textAlign: "center",
                                textTransform: "none",
                                minWidth: "150px",
                            }}
                        >
                            <Typography variant="h6">{szolgaltatas.szolgaltatasNev}</Typography>
                        </Button>
                    ))}
                </Box>
            ) : (
                <Typography variant="h6" sx={{ color: "#0d0d0dff" }}>
                    Nincsenek elérhető szolgáltatások ebben a kórházban.
                </Typography>
            )}
            <Button sx={{
                backgroundColor: "#9c7b48ff",
                color: "white",
                "&:hover": {
                    backgroundColor: "#7a5a30",
                },
            }}
                onClick={() => setSelectedKorhaz(null)}>
                Vissza</Button>
        </Box>
    );
}

export default SzolgaltatasValaszto;