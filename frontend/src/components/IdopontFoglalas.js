import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function IdopontFoglalas() {
  const [korhazak, setKorhazak] = useState([]);
  const [selectedKorhaz, setSelectedKorhaz] = useState(null);
  const [selectedSzolgaltatas, setSelectedSzolgaltatas] = useState(null);
  const [szolgaltatasok, setSzolgaltatasok] = useState([]);
  const [orvosok, setOrvosok] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/korhaz/list-all")
      .then((response) => {
        setKorhazak(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSzolgaltatas = (korhaz) => {
    setSelectedKorhaz(korhaz);
    setSelectedSzolgaltatas(null);
    setOrvosok([]);
    axios
      .get(`http://localhost:8080/szolgaltatas/list-all`)
      .then((response) => {
        setSzolgaltatasok(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOrvosok = (szolgaltatas) => {
    if (!selectedKorhaz || !szolgaltatas) {
      console.error("Hiba: A kórház vagy szolgáltatás nincs kiválasztva.");
      return;
    }
    setSelectedSzolgaltatas(szolgaltatas);
    setSzolgaltatasok([]);
    axios
      .get(`http://localhost:8080/orvos/filter/by-korhaz-and-szakterulet?korhazId=${selectedKorhaz.korhazId}&szakteruletId=${szolgaltatas.szakterulet.szakteruletId}`)
      .then((response) => {
        setOrvosok(response.data);
      })
      .catch((error) => {
        console.error("Hiba a lekérdezés során:", error);
      });
  };

  const handleBack = () => {
    setSelectedKorhaz(null);
    setSelectedSzolgaltatas(null);
    setSzolgaltatasok([]);
    setOrvosok([]);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom right, #9c7b48ff, white)",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!selectedKorhaz ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            maxWidth: "650px",
            width: "100%",
          }}
        >
          {korhazak.map((korhaz) => (
            <Button
              key={korhaz.korhazId}
              onClick={() => handleSzolgaltatas(korhaz)}
              sx={{
                padding: "15px",
                width: "calc(50% - 5px)",
                maxWidth: "300px",
                backgroundColor: "#0d0d0dff",
                color: "#9c7b48ff",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                flexGrow: 1,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1a1a1a",
                },
              }}
            >
              <Typography variant="h5">{korhaz.korhazNev}</Typography>
            </Button>
          ))}
        </Box>
      ) : !selectedSzolgaltatas ? (
        <Box
          sx={{
            marginTop: '120px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Typography variant="h4" sx={{ color: "#0d0d0dff", marginBottom: "10px" }}>
            {selectedKorhaz.korhazNev} szolgáltatásai:
          </Typography>
          {szolgaltatasok.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
                width: "100%",
              }}
            >
              {szolgaltatasok.map((szolgaltatas) => (
                <Button
                  key={szolgaltatas.szolgaltatasId}
                  onClick={() => handleOrvosok(szolgaltatas)}
                  sx={{
                    padding: "10px",
                    backgroundColor: "#0d0d0dff",
                    color: "#9c7b48ff",
                    borderRadius: "10px",
                    textAlign: "center",
                    textTransform: "none",
                    minWidth: "150px",
                  }}
                >
                  <Typography variant="h6">{szolgaltatas.szolgaltatasNev}</Typography>
                </Button>
              ))}
            </Box>
          ) : (
            <Typography variant="h6" sx={{ color: "#0d0d0dff" }}>
              Nincsenek elérhető szolgáltatások ebben a kórházban.
            </Typography>
          )}
          <Button
        onClick={handleBack}
        sx={{
          marginTop: "20px",
          backgroundColor: "#9c7b48ff",
          color: "white",
          "&:hover": {
            backgroundColor: "#7a5a30",
          },
        }}
      >
        Vissza
      </Button>
        </Box>
      ) : (
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="h5" sx={{ color: "#0d0d0dff", marginBottom: "10px" }}>
            Elérhető orvosok:
          </Typography>
          {orvosok.map((orvos) => (
            
            <Button key={orvos.orvosId} variant="h6" sx={{ color: "#0d0d0dff", textTransform: "none", backgroundColor: "#0d0d0dff", color: "#9c7b48ff", borderRadius: "10px", textAlign: "center", padding: "10px", margin: "5px" }}>
              {orvos.nev}
            </Button>
            
          ))}
          <br></br>
          <Button
            onClick={handleBack}
            sx={{
            marginTop: "20px",
            backgroundColor: "#9c7b48ff",
             color: "white",
             "&:hover": {
                 backgroundColor: "#7a5a30",
          },
        }}
      >
        Vissza
      </Button>
        </Box>
      )}
    </Box>
  );
}

export default IdopontFoglalas;
