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
                padding: '20px',
            }}
        >
            <Typography variant="h5" sx={{ color: "#0d0d0dff", marginBottom: "20px", fontWeight: "bold" }}>
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
                    }}
                >
                    VISSZA A FŐOLDALRA
                </Button>
            </Link>
        </Box>
    );
}

export default SikeresIdopontfoglalas;