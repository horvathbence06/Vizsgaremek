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
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom right, #9c7b48ff, white)" }}>
        <Typography variant="h2" sx={{ textAlign: "center", fontFamily: "Kaushan Script", margin: "20vh 0 0 0" }}>Árlista</Typography>
    <TableContainer component={Paper} sx={{ width: '50vh', margin: '5vh auto', backgroundColor: "#0d0d0dff" }}>
      <Table sx={{ width: '50vh', color: "#9c7b48" }}> 
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ color: "#9c7b48" }}><Typography variant="h4" sx={{fontFamily: "Kaushan Script"}}>Szolgáltatás</Typography></TableCell>
            <TableCell align="right" sx={{ color: "#9c7b48"}}><Typography variant="h4" sx={{fontFamily: "Kaushan Script"}}>Ár</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {szolgaltatasok.map((szolgaltatas) => (
            <TableRow
              key={szolgaltatas.szolgaltatasId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" sx={{ color: "#9c7b48", fontFamily: "Kaushan Script", fontSize: '2vh' }}>{szolgaltatas.szolgaltatasNev}</TableCell>
              <TableCell align="right" sx={{ color: "#9c7b48", fontFamily: "Kaushan Script", fontSize: '2vh' }}>{szolgaltatas.ar} HUF</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <Typography variant="h6" sx={{ textAlign: "center"}}>Áraink az egész ország területén található minden LuxMed kórházban érvényesek, a változtatás jogát fenntartjuk.</Typography>
        <Typography variant="h6" sx={{ textAlign: "center", margin: "0 0 20vh 0" }}>Áraink az ÁFÁ-t tartalmazzák.</Typography>
    </Box>

    );
}

export default Arlista;