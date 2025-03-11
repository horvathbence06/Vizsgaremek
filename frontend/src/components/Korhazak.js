import { Box, Typography } from '@mui/material';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Korhazak(){
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

    console.log(korhazak);  
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom right, #9c7b48ff, white)" }}>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                {korhazak.map((korhaz) => {
                    return (
                        <Box key={korhaz.id} sx={{ width: "50%", padding: "20px", backgroundColor: "#0d0d0dff", color: "#9c7b48ff", margin: "20px", borderRadius: "10px" }}>
                            <Typography variant="h2" sx={{float: 'right'}}>{korhaz.korhazNev}</Typography>
                            <Typography variant="h6" sx={{float: 'left'}}><img src={korhaz.kepNev} alt={korhaz.kepNev}></img></Typography>
                            <Typography variant="h6" sx={{float: 'right'}}>{korhaz.korhazCim}</Typography>
                        </Box>
                    );
                }, [])}
            </Box>
        </Box>
    );
};

export default Korhazak;
