import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";

function UjSzolgaltatas() {
    const [szolgaltatasNev, setSzolgaltatasNev] = useState("");
    const [ar, setAr] = useState("");
    const [szakteruletId, setSzakteruletId] = useState("");
    const [szakteruletek, setSzakteruletek] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/szakterulet/list-all`)
            .then((response) => {
                setSzakteruletek(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newSzolgaltatas = {
            szolgaltatasNev,
            ar,
            szakteruletId,
        };

        try {
            await axios.post("http://localhost:8080/szolgaltatas", newSzolgaltatas);
            setOpenSnackbar(true);
            setSzolgaltatasNev("");
            setAr("");
            setSzakteruletId("");
        } catch (error) {
            console.error("Hiba a szolgáltatás hozzáadása során:", error);
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Új szolgáltatás felület</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Új szolgáltatás hozzáadása</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Szolgáltatás neve"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={szolgaltatasNev}
                    onChange={(e) => setSzolgaltatasNev(e.target.value)}
                    required
                />
                <TextField
                    label="Ár"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    value={ar}
                    onChange={(e) => setAr(e.target.value)}
                    required
                />
                <FormControl fullWidth sx={{ marginTop: 2, marginBottom: 2 }}>
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
                    A szolgáltatás sikeresen hozzáadva!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default UjSzolgaltatas;