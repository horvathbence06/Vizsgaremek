import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";

function Korhaz() {
    const { korhazId } = useParams();
    const [korhaz, setKorhaz] = useState(null);
    const [szolgaltatasok, setSzolgaltatasok] = useState([]);
    const [orvosok, setOrvosok] = useState([]);
    const [foigazgato, setFoigazgato] = useState(null);
    const [coordinates, setCoordinates] = useState(null); 

    useEffect(() => {
        axios.get(`http://localhost:8080/korhaz/${korhazId}`)
            .then((response) => {
                setKorhaz(response.data);
                const formattedCim = response.data.korhazCim.replace(/\.$/, '').trim();
                axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(formattedCim)}`)
                    .then((geoResponse) => {
                        if (geoResponse.data.length > 0) {
                            const { lat, lon } = geoResponse.data[0]; 
                            setCoordinates({ lat, lon });
                        }
                    })
                    .catch((error) => {
                        console.error("Geokódolási hiba:", error);
                    });
            })
            .catch((error) => {
                console.error("API hiba:", error);
            });
    }, [korhazId]);

    useEffect(() => {
        axios.get(`http://localhost:8080/szolgaltatas/list-all`)
            .then((response) => {
                setSzolgaltatasok(response.data);
            })
            .catch((error) => {
                console.error("API hiba:", error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/orvos/filter/by-korhaz?korhazId=${korhazId}`)
            .then((response) => {
                setOrvosok(response.data);
            })
            .catch((error) => {
                console.error("API hiba:", error);
            });
    }, [korhazId]);

    useEffect(() => {
        axios.get(`http://localhost:8080/orvos/1`)
            .then((response) => {
                setFoigazgato(response.data);
            })
            .catch((error) => {
                console.error("API hiba:", error);
            });
    }, []);

    if (!korhaz) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    const orvosokList = korhazId !== '2' && foigazgato ? [foigazgato, ...orvosok.filter(orvos => orvos.orvosId !== foigazgato.orvosId)] : orvosok;

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                overflowX: "hidden"
            }}
        >
            <Box sx={{ position: "relative", width: "100%", height: { xs: "40vh", md: "70vh" }, margin: 0, padding: 0 }}>
                <img
                    src={`${process.env.PUBLIC_URL}/${korhaz.kepNev}`}
                    alt={korhaz.korhazNev}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        margin: 0,
                        display: "block",
                        verticalAlign: "bottom"
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        height: "100%",
                        width: "100%",
                        margin: 0,
                        padding: 0
                    }}
                >
                    <Typography variant="h1" sx={{ fontWeight: 'bold', fontFamily: 'Times New Roman', color: "white", textAlign: "center", margin: 0, padding: 0, fontSize: { xs: '2rem', md: '3rem' } }}>
                        {korhaz.korhazNev}
                    </Typography>
                </Box>
            </Box>

            <Container
                sx={{
                    padding: { xs: "2vh", md: "4vh" },
                    background : "linear-gradient(to bottom right, #9c7b48ff, #f5f5f5)",
                    flexGrow: 1,
                    width: "100%",
                    maxWidth: "100%",
                    margin: 0,
                    paddingTop: 0,
                    overflowX: "hidden",
                    boxSizing: "border-box"
                }}
                maxWidth={false}
            >
                <Typography variant="h3" sx={{ color: "#0d0d0dff", marginBottom: "20px", fontWeight: "bold", textAlign: "center", margin: "2vh", fontFamily: "Kaushan Script", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Szolgáltatásaink:
                </Typography>
                {szolgaltatasok.length > 0 ? (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "repeat(auto-fill, minmax(200px, 1fr))", md: "repeat(auto-fill, minmax(300px, 1fr))" },
                            gap: "3vh",
                            padding: "5vh",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                    >
                        {szolgaltatasok.map((szolgaltatas) => (
                            <Box
                                key={szolgaltatas.szolgaltatasId}
                                sx={{
                                    padding: "10px",
                                    backgroundColor: "black",
                                    height: { xs: 'auto', md: '6vh' },
                                    color: '#9c7b48ff',
                                    borderRadius: "10px",
                                    boxShadow: 2,
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>{szolgaltatas.szolgaltatasNev}</Typography>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Typography variant="h6" sx={{ color: "#0d0d0dff", fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Nincsenek elérhető szolgáltatások ebben a kórházban.
                    </Typography>
                )}
                <Typography variant="h3" sx={{ color: "#0d0d0dff", marginBottom: "20px", fontWeight: "bold", textAlign: "center", margin: "2vh", fontFamily: "Kaushan Script", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Orvosaink:
                </Typography>
                {orvosokList.length > 0 ? (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "repeat(auto-fill, minmax(200px, 1fr))", md: "repeat(auto-fill, minmax(300px, 1fr))" },
                            gap: "5vh",
                            padding: "5vh",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                    >
                        {orvosokList.map((orvos) => (
                            <Box
                                key={orvos.orvosId}
                                sx={{
                                    padding: "10px",
                                    backgroundColor: "white",
                                    borderRadius: "10px",
                                    boxShadow: 2,
                                    textAlign: "center"
                                }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/orvosok/${orvos.kepNev}`}
                                    alt={orvos.nev}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "10px 10px 0 0"
                                    }}
                                />
                                <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold", fontSize: { xs: '1rem', md: '1.25rem' } }}>{orvos.nev}</Typography>
                                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>{orvos.szakterulet.szakteruletNev}</Typography>
                                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}><b>Tel:</b> {orvos.telefonszam}</Typography>
                                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}><b>E-mail:</b> {orvos.email}</Typography>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Typography variant="h6" sx={{ color: "#0d0d0dff", fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Nincsenek elérhető orvosok ebben a kórházban.
                    </Typography>
                )}

                {coordinates && (
                    <Box sx={{ marginTop: "40px", padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="h3" sx={{ color: "#0d0d0dff", marginBottom: "20px", fontWeight: "bold", fontFamily: "Kaushan Script", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                            Kórházunk elhelyezkedése:
                        </Typography>
                        <Box
                            sx={{
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#f5f5f5",
                                padding: "10px",
                                width: { xs: "90%", md: "50%" },
                            }}
                        >
                            <iframe
                                title="OpenStreetMap"
                                src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(coordinates.lon) - 0.01},${parseFloat(coordinates.lat) - 0.01},${parseFloat(coordinates.lon) + 0.01},${parseFloat(coordinates.lat) + 0.01}&layer=mapnik&marker=${parseFloat(coordinates.lat)},${parseFloat(coordinates.lon)}`}
                                width="100%"
                                height="450"
                                style={{
                                    border: "none",
                                    borderRadius: "10px",
                                }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default Korhaz;