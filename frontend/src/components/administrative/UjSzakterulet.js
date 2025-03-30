import React, { useState } from "react";
import { Typography, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import axios from "axios";

function UjSzakterulet() {
    const [szakteruletNev, setSzakteruletNev] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newSzakterulet = {
            szakteruletNev,
        };

        try {
            const response = await axios.post("http://localhost:8080/szakterulet", newSzakterulet);
            setOpenSnackbar(true);
            setSzakteruletNev("");
        } catch (error) {
            console.error("Hiba a szakterület hozzáadása során:", error.response ? error.response.data : error.message);
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Új szakterület felület</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Új szakterület hozzáadása</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Szakterület"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={szakteruletNev}
                    onChange={(e) => setSzakteruletNev(e.target.value)}
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
                    A szakterület sikeresen hozzáadva!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default UjSzakterulet;