import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'rgba(13, 13, 13, 0.8)', padding: '10px 0' }}>
      <style>
        {`
          a {
            position: relative;
            text-decoration: none;
            color: inherit;
          }
          a::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%) scaleX(0);
            transform-origin: center;
            width: 100%;
            height: 2px;
            background: #9c7b48ff;
            transition: transform 0.3s ease;
          }
          a:hover::after {
            transform: translateX(-50%) scaleX(1);
          }

          /* Csak a logo-ra ne legyen underline */
          .logo-link::after {
            display: none !important;
          }

          /* Logo animáció */
          .logo-link img {
            transition: transform 0.4s ease;
          }

          .logo-link:hover img {
            transform: scale(1.4);
          }
        `}
      </style>

      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 100px' }}>
        
        <Box sx={{ display: 'flex', gap: '60px', color: '#9c7b48ff', marginLeft: '60px' }}>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/korhazak">Kórházak</Link>
          </Typography>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/arak">Árlista</Link>
          </Typography>
        </Box>
        
        <Box>
          <Link to="/" className="logo-link">
            <img src="logo_transparent.png" alt="LuxMed Logo" style={{ height: '100px' }} />
          </Link>
        </Box>
        
        <Box sx={{ display: 'flex', gap: '60px', color: '#9c7b48ff', marginRight: '60px' }}>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/rolunk">Rólunk</Link>
          </Typography>
          <Typography variant="h5" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script' }}>
            <Link to="/kapcsolat">Kapcsolat</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
