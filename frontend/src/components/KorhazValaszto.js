import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { IdopontContext } from "./IdopontContext";
import { Link } from "react-router-dom";

function KorhazValaszto() {
    const { korhazak, setSelectedKorhaz } = useContext(IdopontContext);

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                maxWidth: "650px",
                width: "100%",
            }}
        >
            <Typography variant="h4" sx={{ color: "#0d0d0dff", marginBottom: "10px", fontWeight: "bold" }}>
                Válasszon egy kórházat:
            </Typography>
            {korhazak.map((korhaz) => (
                <Button
                    key={korhaz.korhazId}
                    onClick={() => setSelectedKorhaz(korhaz)}
                    sx={{
                        padding: "15px",
                        width: "calc(50% - 5px)",
                        maxWidth: "300px",
                        backgroundColor: "#0d0d0dff",
                        color: "#9c7b48ff",
                        borderRadius: "10px",
                        textAlign: "center",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                        flexGrow: 1,
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#1a1a1a",
                        },
                    }}
                >
                    <Typography variant="h5">{korhaz.korhazNev}</Typography>
                </Button>
            ))}
            <Link to="/">
                <Button
                    sx={{
                        backgroundColor: "#9c7b48ff",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#7a5a30",
                        },
                    }}
                >
                    VISSZA A FŐOLDALRA
                </Button>
            </Link>
        </Box>
    );
}

export default KorhazValaszto;