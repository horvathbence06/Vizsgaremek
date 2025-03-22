import React from "react";
import { Box, Typography, Container } from "@mui/material";


const AboutUs = () => {
  return (
    <>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #9c7b48ff, white)",
          padding: "50px 0",
        }}
      >
        <Container
          sx={{
            width: "60%",
            backgroundColor: "rgba(13, 13, 13, 0.9)",
            padding: "40px",
            borderRadius: "10px",
            color: "#9c7b48ff",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontFamily: "Kaushan Script", marginBottom: "20px" }}
          >
            Rólunk – LuxMed Magánkórház
          </Typography>
          <Typography variant="body1" sx={{ color: "white", textAlign: "justify" }}>
            Üdvözöljük a LuxMed Magánkórház hivatalos weboldalán! Intézményünk küldetése,
            hogy modern, betegközpontú ellátást biztosítsunk pácienseink számára a legmagasabb
            színvonalon. Hiszünk abban, hogy a gyógyulás nem csupán kezelésekről, hanem gondoskodásról,
            bizalomról és innovációról is szól – ez az, ahol a gyógyulás kezdődik.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "white", textAlign: "justify" }}>
            A LuxMed Magánkórház az évek során folyamatosan bővült, és mára Magyarország egyik
            legnagyobb magánegészségügyi hálózatává vált. Jelenleg 8 városban nyújtunk prémium
            egészségügyi szolgáltatásokat:
          </Typography>
          <br />
          <Typography variant="body2" sx={{ color: "#9c7b48ff" }}>
             Budai Központunk 2005-ben nyitotta meg kapuit.<br />
             Pesti Klinikánk 2008 óta működik.<br />
             Nyíregyházi Intézményünk 2012-ben csatlakozott.<br />
             Debreceni Klinikánk 2015-ben kezdte meg működését.<br />
             Miskolci Rendelőnk 2017-ben nyílt meg.<br />
             Pécsi Központunk 2019 óta üzemel.<br />
             Szegedi Klinikánk 2021-ben indult.<br />
             Győri Kórházunk 2023-ban csatlakozott a LuxMed családhoz.<br />
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "white", textAlign: "justify" }}>
            A LuxMed Magánkórház egy olyan közösség, ahol a legkiválóbb orvosok, szakápolók és egészségügyi szakemberek
            dolgoznak együtt annak érdekében, hogy pácienseink gyorsan és hatékonyan gyógyuljanak. Célunk, hogy minden betegünk
            személyre szabott ellátásban részesüljön, a legújabb technológiák és orvosi megoldások alkalmazásával.
          </Typography>
          <br />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#9c7b48ff" }}>
            LuxMed – ahol a gyógyulás kezdődik.
          </Typography>
        </Container>
      </Box>
    
    </>
  );
};

export default AboutUs;
