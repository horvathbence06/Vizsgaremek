import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'rgba(13, 13, 13, 0.8)', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 100px' }}>
        
        <Box sx={{ display: 'flex', gap: '60px', color: '#9c7b48ff', marginLeft: '60px' }}>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/korhazak" style={{ textDecoration: 'none', color: 'inherit' }}>Kórházak</Link>
          </Typography>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/arak" style={{ textDecoration: 'none', color: 'inherit' }}>Árlista</Link>
          </Typography>
        </Box>
        
        <Box>
          <Link to="/"><img src="logo_transparent.png" alt="LuxMed Logo" style={{ height: '100px' }} /></Link>
        </Box>
        
        <Box sx={{ display: 'flex', gap: '60px', color: '#9c7b48ff', marginRight: '60px' }}>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/rolunk" style={{ textDecoration: 'none', color: 'inherit' }}>Rólunk</Link>
          </Typography>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/kapcsolat" style={{ textDecoration: 'none', color: 'inherit' }}>Kapcsolat</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
