import React from "react";
import { Box, Typography, Container } from "@mui/material";


function Rolunk(){
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
            A LuxMed Magánkórház az évek során folyamatosan bővült, és mára Magyarország 7 városában, 8 intézményünkben nyújtunk prémium
            egészségügyi szolgáltatásokat:
          </Typography>
          <br />
          <Typography variant="body2" sx={{ color: "#9c7b48ff" }}>
             Nyíregyházi központunk az első és legnagyobb vidéki kórházunk<br />
             Pesti intézményünk a legnagyobb kórházunk országosan<br />
             Budai kórházunk a főváros nyugati felének nyújt prémium szolgáltatást<br />
             Debreceni klinikánk a keleti országrész egyik legmodernebb intézménye<br />
             Szegedi központunk Dél-Magyarország ellátását biztosítja<br />
             Pécsi kórházunk megnyitásával jelen lettünk a Dunántúlon is<br />
             Győri klinikánk az Észak-Dunántúl első számú egészségügyi intézménye<br />
             Miskolci kórházunk a LuxMed család legújabb tagja<br />
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

export default Rolunk;
