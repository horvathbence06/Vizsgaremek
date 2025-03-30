import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";

function UjOrvos() {
    const [orvosNev, setOrvosNev] = useState("");
    const [kepNev, setKepNev] = useState("");
    const [email, setEmail] = useState("");
    const [telefonszam, setTelefonszam] = useState("");
    const [szakteruletId, setSzakteruletId] = useState("");
    const [korhazId, setKorhazId] = useState("");
    const [szakteruletek, setSzakteruletek] = useState([]);
    const [korhazak, setKorhazak] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/szakterulet/list-all`)
            .then((response) => {
                setSzakteruletek(response.data);
            }).catch((error) => {
                console.log(error.message);
            });

        axios.get(`http://localhost:8080/korhaz/list-all`)
            .then((response) => {
                setKorhazak(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newOrvos = {
            nev: orvosNev,
            kepNev,
            email,
            telefonszam,
            szakteruletId,
            korhazId,
        };

        try {
            await axios.post("http://localhost:8080/orvos", newOrvos);
            setOpenSnackbar(true);
            setOrvosNev("");
            setKepNev("");
            setEmail("");
            setTelefonszam("");
            setSzakteruletId("");
            setKorhazId("");
        } catch (error) {
            console.error("Hiba az orvos hozzáadása során:", error);
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Új orvos felület</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Új orvos hozzáadása</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Orvos neve"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={orvosNev}
                    onChange={(e) => setOrvosNev(e.target.value)}
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
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    label="Telefonszám"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={telefonszam}
                    onChange={(e) => setTelefonszam(e.target.value)}
                    required
                />
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>Szakterület</InputLabel>
                    <Select
                        value={szakteruletId}
                        onChange={(e) => setSzakteruletId(e.target.value)}
                        required
                    >
                        {szakteruletek.map((szakterulet) => (
                            <MenuItem key={szakterulet.szakteruletId} value={szakterulet.szakteruletId}>
                                {szakterulet.szakteruletNev}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>Kórház</InputLabel>
                    <Select
                        value={korhazId}
                        onChange={(e) => setKorhazId(e.target.value)}
                        required
                    >
                        {korhazak.map((korhaz) => (
                            <MenuItem key={korhaz.korhazId} value={korhaz.korhazId}>
                                {korhaz.korhazNev}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
                    Az orvos sikeresen hozzáadva!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default UjOrvos;