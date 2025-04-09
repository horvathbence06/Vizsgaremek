import './ImageSlider.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';

function ImageSlider() {
    const startingImages = ["/1.jpg", "/2.png", "/3.png", "/4.png", "/5.png"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % startingImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                <motion.img
                    key={currentIndex}
                    src={startingImages[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -2
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    zIndex: -1
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: '15vh',
                    left: 0,
                    width: "100%",
                    height: "75vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                    gap: 3
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        padding: { xs: '10px', md: '30px 60px' },
                        borderRadius: '12px',
                        maxWidth: { xs: '90%', md: '70%', lg: '60%' },
                    }}
                >
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ fontFamily: "Times New Roman", color: 'white', fontSize: { xs: '2rem', md: '3rem', lg: '4rem' } }}
                    >
                        LUXMED Magánklinikák
                    </Typography>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "Kaushan Script",
                            letterSpacing: 2,
                            color: '#c6a472',
                            fontSize: { xs: '1.2rem', md: '1.5rem', lg: '2rem' }
                        }}
                    >
                        Szeretettel várjuk ott, ahol a gyógyulás kezdődik...
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/korhazak')}
                        sx={{
                            backgroundColor: '#9c7b48',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#c6a472'
                            }
                        }}
                    >
                        Kórházaink
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/arak')}
                        sx={{
                            backgroundColor: '#9c7b48',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#c6a472'
                            }
                        }}
                    >
                        Szolgáltatásaink
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/rolunk')}
                        sx={{
                            backgroundColor: '#9c7b48',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold   ',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#c6a472'
                            }
                        }}
                    >
                        Történetünk
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/kapcsolat')}
                        sx={{
                            backgroundColor: '#9c7b48',
                            color: 'white',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#c6a472'
                            }
                        }}
                    >
                        Kapcsolatfelvétel
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default ImageSlider;