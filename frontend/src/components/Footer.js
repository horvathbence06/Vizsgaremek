import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ASZF from './legal/ASZF';
import AdatkezelesiTajekoztato from './legal/AdatkezelesiTajekoztato';
import BetegjogiTajekoztato from './legal/BetegjogiTajekoztato';

function Footer() {
    const navigate = useNavigate();
    const [openASZFModal, setOpenASZFModal] = useState(false);
    const [openAdatkezelesModal, setOpenAdatkezelesModal] = useState(false);
    const [openBetegjogiModal, setOpenBetegjogiModal] = useState(false);

    const handleOpenASZFModal = () => setOpenASZFModal(true);
    const handleCloseASZFModal = () => setOpenASZFModal(false);
    const handleOpenAdatkezelesModal = () => setOpenAdatkezelesModal(true);
    const handleCloseAdatkezelesModal = () => setOpenAdatkezelesModal(false);
    const handleOpenBetegjogiModal = () => setOpenBetegjogiModal(true);
    const handleCloseBetegjogiModal = () => setOpenBetegjogiModal(false);

    return (
        <Box
            sx={{
                marginTop: "auto",
                height: "auto",
                backgroundColor: "#0d0d0dff",
                display: "flex",
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: "space-between",
                alignItems: "center",
                padding: { xs: "10px 20px", md: "40px 60px" }, 
                textAlign: { xs: 'center', md: 'left' } 
            }}
        >
            <style>
                {`
                    a, .animated-link {
                        position: relative;
                        text-decoration: none;
                        display: inline-block;
                        color: inherit; 
                    }
                    a::after, .animated-link::after {
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
                    a:hover::after, .animated-link:hover::after {
                        transform: translateX(-50%) scaleX(1);
                    }
                `}
            </style>

            <Box sx={{ textAlign: 'center', color: '#9c7b48ff', flex: 1, mb: { xs: 2, md: 0 } }}>
                <Typography variant='h5' sx={{ fontFamily: 'Kaushan Script', marginBottom: '20px', fontSize: '48px' }}>Információk</Typography> 
                <Typography variant='h6' className="animated-link" onClick={handleOpenASZFModal} style={{ cursor: 'pointer', fontSize: '18px' }}>
                    Általános szerződési feltételek
                </Typography>
                <br />
                <Typography variant='h6' className="animated-link" onClick={handleOpenAdatkezelesModal} style={{ cursor: 'pointer', fontSize: '18px' }}>
                    Adatkezelési tájékoztató
                </Typography>
                <br />
                <Typography variant='h6' className="animated-link" onClick={handleOpenBetegjogiModal} style={{ cursor: 'pointer', fontSize: '18px' }}>
                    Betegjogi tájékoztató
                </Typography>
            </Box>

            <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center", mb: { xs: 2, md: 0 } }}>
                <img src={`${process.env.PUBLIC_URL}/logo_transparent.png`} alt="LuxMed Logo" style={{ width: "200px", height: "auto" }} />
            </Box>

            <Box sx={{ textAlign: 'center', color: '#9c7b48ff', flex: 1, mb: { xs: 2, md: 0 } }}>
                <Typography variant='h5' sx={{ fontFamily: 'Kaushan Script', marginBottom: '20px', fontSize: '48px' }}>LuxMed Egészségügyi Kft.</Typography> 
                <Typography variant='body1' sx={{ fontSize: '18px' }}>
                    Tel: <a href='tel:+36203676774' className="animated-link">+36 20 367 6774</a>
                </Typography>
                <Typography variant='body1' sx={{ fontSize: '18px' }}>
                    E-mail: <a href='mailto:luxmedinformacio@gmail.com' className="animated-link">luxmedinformacio@gmail.com</a>
                </Typography>
                <Typography variant='body1' sx={{ fontSize: '18px' }}>
                    <span
                        className="animated-link"
                        onClick={() => navigate('/login')}
                        style={{ cursor: 'pointer' }}
                    >
                        Adminisztrátori bejelentkezés
                    </span>
                </Typography>
            </Box>

            <ASZF open={openASZFModal} onClose={handleCloseASZFModal} />
            <AdatkezelesiTajekoztato open={openAdatkezelesModal} onClose={handleCloseAdatkezelesModal} />
            <BetegjogiTajekoztato open={openBetegjogiModal} onClose={handleCloseBetegjogiModal} />
        </Box>
    );
}

export default Footer;