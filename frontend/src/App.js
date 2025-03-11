import './App.css';
import ImageSlider from './components/ImageSlider';
import { Box, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Korhazak from './components/Korhazak';
import Kapcsolat from './components/Kapcsolat';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Box sx={{ minHeight: "115vh", display: "flex", flexDirection: "column" }}>
            <Box sx={{ height: "75vh", width: "100%" }}>
              <ImageSlider />
            </Box>
          </Box>
        } />
        <Route path="/korhazak" element={<Korhazak />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
