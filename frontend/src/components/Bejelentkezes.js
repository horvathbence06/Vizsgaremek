import { Box, Typography, Container, Paper, TextField, Button, Alert, IconButton, InputAdornment } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Bejelentkezes() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const response = await axios.post("http://localhost:8080/felhasznalo/login", 
                { username, password }, 
                { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
            );
    
            const token = response.headers["jwt_token"];
    
            if (token) {
                localStorage.setItem("jwt_token", token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                navigate("/admin");
            } else {
                setError("Hibás bejelentkezési adatok!");
            }
        } catch (error) {
            setError("Bejelentkezési hiba: " + (error.response?.data?.message || "Ismeretlen hiba"));
        }
    };

    return (
        <Box sx={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to bottom right, #9c7b48ff, #f5f5f5)" }}>
            <Container maxWidth="xs">
                <Paper elevation={5} sx={{ padding: "32px", borderRadius: "16px", backgroundColor: "#ffffff" }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Kaushan Script', fontWeight: 'bold', color: "black" }}>
                        Bejelentkezés
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                    <form onSubmit={handleLogin}>
                        <TextField
                            label="Felhasználónév"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            label="Jelszó"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "16px", backgroundColor: "#9c7b48ff", '&:hover': { backgroundColor: 'black', color: 'white' } }}>
                            Bejelentkezés
                        </Button>
                    </form>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "16px" }}>
                        <Button variant="contained" sx={{ backgroundColor: "black", '&:hover': { backgroundColor: '#9c7b48ff', color: 'white' } }} onClick={() => navigate("/")}>
                            Vissza
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default Bejelentkezes;