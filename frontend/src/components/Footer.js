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

    const handleOpenASZFModal = () => {
        setOpenASZFModal(true);
    };

    const handleCloseASZFModal = () => {
        setOpenASZFModal(false);
    };

    const handleOpenAdatkezelesModal = () => {
        setOpenAdatkezelesModal(true);
    };

    const handleCloseAdatkezelesModal = () => {
        setOpenAdatkezelesModal(false);
    };

    const handleOpenBetegjogiModal = () => {
        setOpenBetegjogiModal(true);
    };

    const handleCloseBetegjogiModal = () => {
        setOpenBetegjogiModal(false);
    };

    return (
        <Box
            sx={{
                marginTop: "auto",
                height: "30vh",
                backgroundColor: "#0d0d0dff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 40px"
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

            <Box sx={{ color: '#9c7b48ff', flex: 1 }}>
                < Typography variant='h3' sx={{ fontFamily: 'Kaushan Script', marginBottom: '30px' }}>Információk</Typography>
                <Typography variant='h6' className="animated-link" onClick={handleOpenASZFModal} style={{ cursor: 'pointer' }}>
                    Általános szerződési feltételek
                </Typography>
                <br />
                <Typography variant='h6' className="animated-link" onClick={handleOpenAdatkezelesModal} style={{ cursor: 'pointer' }}>
                    Adatkezelési tájékoztató
                </Typography>
                <br />
                <Typography variant='h6' className="animated-link" onClick={handleOpenBetegjogiModal} style={{ cursor: 'pointer' }}>
                    Betegjogi tájékoztató
                </Typography>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={`${process.env.PUBLIC_URL}/logo_transparent.png`} alt="LuxMed Logo" style={{ width: "300px", height: "auto" }} />
            </Box>

            <Box sx={{ textAlign: 'right', color: '#9c7b48ff', flex: 1 }}>
                <Typography variant='h3' sx={{ fontFamily: 'Kaushan Script', marginBottom: '30px' }}>LuxMed Egészségügyi Kft.</Typography>
                <Typography variant='h6'>
                    Tel: <a href='tel:+36203676774' className="animated-link">+36 20 367 6774</a>
                </Typography>
                <Typography variant='h6'>
                    E-mail: <a href='mailto:luxmedinformacio@gmail.com' className="animated-link">luxmedinformacio@gmail.com</a>
                </Typography>
                <Typography variant='h6'>
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