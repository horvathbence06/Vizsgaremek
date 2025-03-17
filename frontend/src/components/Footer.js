import { Box, Typography } from '@mui/material';

function Footer(){
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
            <Box sx={{ color: '#9c7b48ff', flex: 1 }}>
            <Typography variant='h3' sx={{ fontFamily: 'Kaushan Script', marginBottom: '30px' }}>Információk</Typography>
            <Typography variant='h6'>Általános szerződési feltételek</Typography>
            <Typography variant='h6'>Adatvédelmi tájékoztató</Typography>
            <Typography variant='h6'>Betegjogi tájékoztató</Typography>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="logo_transparent.png" alt="LuxMed Logo" style={{ width: "300px", height: "auto" }} />
            </Box>

            <Box sx={{ textAlign: 'right', color: '#9c7b48ff', flex: 1 }}>
            <Typography variant='h3' sx={{ fontFamily: 'Kaushan Script', marginBottom: '30px' }}>LuxMed Egészségügyi Kft.</Typography>
            <Typography variant='h6'>Tel: <a href='tel:+36203676774' style={{ color: '#9c7b48ff' }}>+36 20 367 6774</a></Typography>
            <Typography variant='h6'>E-mail: <a href='mailto:info@luxmed.hu' style={{ color: '#9c7b48ff' }}>luxmedinformacio@gmail.com</a></Typography>
            <Typography variant='h6'>Központi postacím: 1088 Budapest, Pf. 96.</Typography>
            </Box>
        </Box>
    );
}

export default Footer;