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
import Bejelentkezes from './components/Bejelentkezes';
import Admin from './components/Admin';
import Korhaz from './components/Korhaz';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function AppContent() {
  const location = useLocation(); 
  const theme = createTheme({

  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Box sx={{ height: '100vh', display: "flex", flexDirection: "column" }}>
              <ImageSlider />
          </Box>
        } />
        <Route path="/korhaz/:korhazId" element={<Korhaz />} />
        <Route path="/korhazak" element={<Korhazak />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
        <Route path="/idopontfoglalas" element={<IdopontFoglalas />} />
        <Route path="/arak" element={<Arlista />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/login" element={<Bejelentkezes />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      {location.pathname !== "/idopontfoglalas" && location.pathname !== "/login" && location.pathname !== "/admin" && <IdopontGomb />}
      </ThemeProvider>
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
