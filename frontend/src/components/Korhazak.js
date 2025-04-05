import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

function Korhazak() {
    let [korhazak, setKorhazak] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/korhaz/list-all")
            .then((response) => {
                setKorhazak(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom right, #9c7b48ff, white)", padding: { xs: '20px', md: '40px' } }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", margin: '25vh 0' }}>
                {korhazak.map((korhaz, index) => (
                    <Box
                        component={Link} 
                        to={`/korhaz/${korhaz.korhazId}`} 
                        key={korhaz.korhazId} 
                        sx={{
                            width: { xs: '90%', md: '30%' }, 
                            padding: "20px",
                            backgroundColor: "#0d0d0dff",
                            color: "#9c7b48ff",
                            marginLeft: isMobile ? "0" : (index % 2 === 0 ? "30%" : "50%"), 
                            marginTop: "20px",
                            marginBottom: "20px",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            alignItems: isMobile ? "center" : "flex-start", 
                            justifyContent: "flex-start",
                            textDecoration: 'none', 
                            transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                backgroundColor: 'white',
                                color: 'black',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flexShrink: 0,
                                marginRight: isMobile ? "0" : "20px", 
                                marginBottom: isMobile ? "10px" : "0", 
                            }}
                        >
                            <img
                                src={korhaz.kepNev}
                                alt={korhaz.korhazNev}
                                style={{
                                    maxWidth: "150px",
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "5px",
                                    display: "block",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                flexGrow: 1,
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                                {korhaz.korhazNev}
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                {korhaz.korhazCim}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Korhazak;