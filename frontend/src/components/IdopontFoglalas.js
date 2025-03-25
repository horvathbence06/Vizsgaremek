import { Box } from "@mui/material";
import { useEffect, useContext } from "react";
import axios from "axios";
import KorhazValaszto from "./KorhazValaszto";
import SzolgaltatasValaszto from "./SzolgaltatasValaszto";
import OrvosValaszto from "./OrvosValaszto";
import IdopontValaszto from "./IdopontValaszto";
import AdatUrlap from "./AdatUrlap";
import SikeresIdopontfoglalas from "./SikeresIdopontfoglalas";
import { IdopontContext, IdopontProvider } from "./IdopontContext";

function IdopontFoglalas() {
  const {
    setKorhazak,
    setIdopontok,
    selectedKorhaz,
    selectedSzolgaltatas,
    selectedOrvos,
    sikeresFoglalas,
    selectedTime,
    setSelectedTime // Itt van a setSelectedTime
  } = useContext(IdopontContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/korhaz/list-all")
      .then((response) => {
        setKorhazak(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8080/idopont/list-all")
      .then((response) => {
        setIdopontok(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setKorhazak, setIdopontok]);

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
      {!sikeresFoglalas ? (
        <>
          {!selectedKorhaz && <KorhazValaszto />}
          {selectedKorhaz && !selectedSzolgaltatas && <SzolgaltatasValaszto />}
          {selectedSzolgaltatas && !selectedOrvos && <OrvosValaszto />}
          {selectedOrvos && !selectedTime && <IdopontValaszto />}
          {selectedTime && <AdatUrlap />}
        </>
      ) : (
        <SikeresIdopontfoglalas />
      )}
    </Box>
  );
}

export default function IdopontFoglalasWrapper() {
  return (
    <IdopontProvider>
      <IdopontFoglalas />
    </IdopontProvider>
  );
}