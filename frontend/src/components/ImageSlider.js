import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
import './ImageSlider.module.css';

function ImageSlider() {
    const startingImages = ["/1.jpg", "/2.png", "/3.png", "/4.png", "/5.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % startingImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
<>
    <Box>
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
          height: '75vh',
          objectFit: 'cover'
        }}
      />
    </Box>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "75%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", 
      }}
    >
    </Box>
    <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center"
        }}
      >
        <Box sx={{backgroundColor: 'black', padding: '10px', opacity: '80%'}}>
          <Typography variant="h1" fontWeight="bold" style={{fontFamily: "Times New Roman", color: 'white'}}>LUXMED Magánklinikák</Typography> 
          <Typography variant="h3" fontWeight="bold" style={{fontFamily: "Kaushan Script", letterSpacing: 2, color: '#9c7b48ff'}}>Szeretettel várjuk ott, ahol a gyógyulás kezdődik...</Typography>
        </Box>
      </Box>
    </>
  );

}

export default ImageSlider;