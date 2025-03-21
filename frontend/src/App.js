import './App.css';
import ImageSlider from './components/ImageSlider';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Korhazak from './components/Korhazak';
import Kapcsolat from './components/Kapcsolat';
import IdopontGomb from './components/IdopontGomb';
import IdopontFoglalas from './components/IdopontFoglalas';
import Arlista from './components/Arlista';
import Rolunk from "./components/Rolunk";



function AppContent() {
  const location = useLocation(); 

  return (
    <>
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
        <Route path="/idopontfoglalas" element={<IdopontFoglalas />} />
        <Route path="/arak" element={<Arlista />} />
        <Route path="/rolunk" element={<Rolunk />} />
      </Routes>
      <Footer />
      {location.pathname !== "/idopontfoglalas" && <IdopontGomb />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
