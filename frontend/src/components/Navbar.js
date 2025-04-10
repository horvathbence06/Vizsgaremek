import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

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

          .logo-link::after {
            display: none !important;
          }

          .logo-link img {
            transition: transform 0.4s ease;
          }

          .logo-link:hover img {
            transform: scale(1.4);
          }
        `}
      </style>

      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center', padding: '0 20px' }}>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: '20px', color: '#9c7b48ff', flexGrow: 1, justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script', minWidth: '120px', textAlign: 'center' }}>
              <Link to="/korhazak">Kórházak</Link>
            </Typography>
            <Typography variant="h6" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script', minWidth: '120px', textAlign: 'center' }}>
              <Link to="/arak">Árlista</Link>
            </Typography>
          </Box>
        )}
        
        <Box>
          <Link to="/" className="logo-link">
            <img src={`${process.env.PUBLIC_URL}/logo_transparent.png`} alt="LuxMed Logo" style={{ height: isMobile ? '80px' : '100px' }} />
          </Link>
        </Box>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: '20px', color: '#9c7b48ff', flexGrow: 1, justifyContent: 'center' }}>
            <Typography variant="h6" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script', minWidth: '120px', textAlign: 'center' }}>
              <Link to="/rolunk">Rólunk</Link>
            </Typography>
            <Typography variant="h6" sx={{ cursor: 'pointer', fontFamily: 'Kaushan Script', minWidth: '120px', textAlign: 'center' }}>
              <Link to="/kapcsolat">Kapcsolat</Link>
            </Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;