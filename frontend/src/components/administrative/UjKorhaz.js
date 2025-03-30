import React, { useState } from "react";
import { Typography, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import axios from "axios";

function UjKorhaz() {
    const [korhazNev, setKorhazNev] = useState("");
    const [kepNev, setKepNev] = useState("");
    const [korhazCim, setKorhazCim] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newKorhaz = {
            korhazNev,
            kepNev,
            korhazCim,
        };

        try {
            const response = await axios.post("http://localhost:8080/korhaz", newKorhaz);
            setOpenSnackbar(true); 
        } catch (error) {
            console.error("Hiba a kórház hozzáadása során:", error);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Új kórház felület</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Új kórház hozzáadása</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Kórház neve"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={korhazNev}
                    onChange={(e) => setKorhazNev(e.target.value)}
                    required
                />
                <TextField
                    label="Kép neve"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={kepNev}
                    onChange={(e) => setKepNev(e.target.value)}
                    required
                />
                <TextField
                    label="Cím"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={korhazCim}
                    onChange={(e) => setKorhazCim(e.target.value)}
                    required
                />
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ backgroundColor: '#9c7b48ff', '&:hover': { backgroundColor: '#8b6a3eff' } }} 
                    >
                        Rögzítés
                    </Button>
                </Box>
            </form>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    A kórház sikeresen hozzáadva!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default UjKorhaz;