import { Box, Typography } from '@mui/material';
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

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom right, #9c7b48ff, white)" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", margin: '25vh 0' }}>
                {korhazak.map((korhaz, index) => (
                    <Link
                        to={`/korhaz/${korhaz.korhazId}`} // ID átadása a linkben
                        key={korhaz.korhazId} // ID használata kulcsként
                        style={{ textDecoration: 'none' }} 
                    >
                        <Box
                            sx={{
                                width: "50%",
                                padding: "20px",
                                backgroundColor: "#0d0d0dff",
                                color: "#9c7b48ff",
                                marginLeft: index % 2 === 0 ? "50vh" : "0",
                                marginRight: index % 2 === 0 ? "0" : "50vh",
                                marginTop: "20px",
                                marginBottom: "20px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                                transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)', 
                                    backgroundColor: 'white', 
                                    color: 'black',
                                },
                            }}
                        >
                            <Box sx={{ flexShrink: 0, marginRight: "20px" }}>
                                <img
                                    src={korhaz.kepNev}
                                    alt={korhaz.korhazNev}
                                    style={{ width: "150px", height: "auto", borderRadius: "5px" }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="h4">{korhaz.korhazNev}</Typography>
                                <Typography variant="h6">{korhaz.korhazCim}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}

export default Korhazak;