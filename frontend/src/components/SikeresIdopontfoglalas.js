import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function SikeresIdopontfoglalas() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: { xs: '20px', md: '40px' }, 
            }}
        >
            <Typography variant="h5" sx={{ color: "#0d0d0dff", marginBottom: "20px", fontWeight: "bold", fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Sikeres időpontfoglalás!
            </Typography>
            <Link to="/">
                <Button
                    sx={{
                        backgroundColor: "#9c7b48ff",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#7a5a30",
                        },
                        padding: { xs: '10px', md: '15px' }, 
                        fontSize: { xs: '0.9rem', md: '1rem' } 
                    }}
                >
                    VISSZA A FŐOLDALRA
                </Button>
            </Link>
        </Box>
    );
}

export default SikeresIdopontfoglalas;