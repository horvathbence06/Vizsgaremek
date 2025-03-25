import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function Arlista() {
    const [szolgaltatasok, setSzolgaltatasok] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/szolgaltatas/list-all")
            .then((response) => {
                setSzolgaltatasok(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to bottom right, #9c7b48ff, white)",
            color: "#0d0d0dff",
            padding: "5vh 0"
        }}>
            <Typography variant="h2" sx={{
                fontFamily: "Kaushan Script",
                marginBottom: "5vh",
                marginTop: "10vh",
                color: "black",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            }}>Árlista</Typography>
            
            <TableContainer component={Paper} sx={{
                width: '60vw',
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#0d0d0dff"
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{
                                color: "#9c7b48",
                                fontSize: "1.5rem",
                                fontFamily: "Kaushan Script"
                            }}>Szolgáltatás</TableCell>
                            <TableCell align="right" sx={{
                                color: "#9c7b48",
                                fontSize: "1.5rem",
                                fontFamily: "Kaushan Script"
                            }}>Ár</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {szolgaltatasok.map((szolgaltatas) => (
                            <TableRow key={szolgaltatas.szolgaltatasId} sx={{
                                '&:nth-of-type(odd)': { backgroundColor: "rgba(156, 123, 72, 0.1)" },
                                '&:hover': { backgroundColor: "rgba(156, 123, 72, 0.2)" }
                            }}>
                                <TableCell align="left" sx={{
                                    color: "#9c7b48",
                                    fontSize: "1.2rem",
                                    fontFamily: "Kaushan Script"
                                }}>{szolgaltatas.szolgaltatasNev}</TableCell>
                                <TableCell align="right" sx={{
                                    color: "#9c7b48",
                                    fontSize: "1.2rem",
                                    fontFamily: "Kaushan Script"
                                }}>{szolgaltatas.ar} HUF</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <Typography variant="h5" sx={{
                textAlign: "center",
                marginTop: "5vh",
                maxWidth: "60vw",
                color: "#0d0d0dff",
                fontFamily: "Kaushan Script"
            }}>Áraink az egész ország területén található minden LuxMed kórházban érvényesek, a változtatás jogát fenntartjuk.</Typography>
            <Typography variant="h5" sx={{
                textAlign: "center",
                marginTop: "1vh",
                maxWidth: "60vw",
                color: "#0d0d0dff",
                fontFamily: "Kaushan Script"
            }}>Áraink az ÁFÁ-t tartalmazzák.</Typography>
        </Box>
    );
}

export default Arlista;