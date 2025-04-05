import { Box, Typography, Button, FormControl, Input, InputLabel, Modal } from "@mui/material";
import { useContext } from "react";
import { IdopontContext } from "./IdopontContext";
import axios from "axios";

function AdatUrlap() {
    const {
        nev, setNev,
        tel, setTel,
        email, setEmail,
        modalOpen, setModalOpen,
        setSikeresFoglalas,
        selectedKorhaz,
        selectedSzolgaltatas,
        selectedOrvos,
        selectedDate,
        selectedTime,
        setSelectedTime,
        setSelectedOrvos,
    } = useContext(IdopontContext);

    const handleSubmit = () => {
        const selectedDateTime = new Date(selectedDate);
        const [hours, minutes] = selectedTime.split(":");
        selectedDateTime.setHours(hours);
        selectedDateTime.setMinutes(minutes);
        selectedDateTime.setSeconds(0);
        const utcDateTime = new Date(selectedDateTime.getTime() - selectedDateTime.getTimezoneOffset() * 60000);
    
        axios.post("http://localhost:8080/idopont", {
            ido: utcDateTime.toISOString(), 
            foglaloNeve: nev,
            foglaloTelefonszama: tel,
            foglaloEmailCim: email,
            orvosId: selectedOrvos.orvosId,
            korhazId: selectedKorhaz.korhazId,
            szolgaltatasId: selectedSzolgaltatas.szakterulet.szakteruletId
        })
        .then(() => {
            setSikeresFoglalas(true);
            setModalOpen(false);
        })
        .catch((error) => {
            console.error("Hiba a foglalás során:", error);
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '10px', md: '20px' }, 
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                width: '100%', 
                margin: 'auto',
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
                Kérjük, adja meg adatait:
            </Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="name">Név</InputLabel>
                <Input
                    id="name"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                    aria-describedby="name-helper"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="tel">Telefonszám</InputLabel>
                <Input
                    id="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    aria-describedby="tel-helper"
                />
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="email-helper"
                />
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                    onClick={() => setModalOpen(true)}
                    sx={{
                        marginTop: '2vh',
                        backgroundColor: '#0d0d0dff',
                        color: '#9c7b48ff',
                        '&:hover': {
                            backgroundColor: '#7a5a30',
                            color: 'black',
                        },
                        padding: { xs: '8px', md: '10px' }, 
                        fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                >
                    IDŐPONT FOGLALÁSA
                </Button>
            </Box>
            <Button
                sx={{
                    marginTop: '2vh',
                    backgroundColor: '#9c7b48ff',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#7a5a30',
                        color: 'black',
                    },
                    padding: { xs: '8px', md: '10px' }, 
                    fontSize: { xs: '0.9rem', md: '1rem' } 
                }}
                onClick={() => setSelectedTime(null)}>
                Vissza
            </Button>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', md: 400 }, 
                        bgcolor: 'white',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="h6" sx={{ marginBottom: '20px', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                        Időpontfoglalás adatai:
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Kórház:</b> {selectedKorhaz.korhazNev}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Szolgáltatás:</b> {selectedSzolgaltatas.szolgaltatasNev}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Orvos:</b> {selectedOrvos.nev}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Időpont:</b> {selectedDate.toLocaleDateString()} {selectedTime}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Név:</b> {nev}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', color: 'black', textAlign: 'center' }}>
                        <b>Telefonszám:</b> {tel}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black', textAlign: 'center' }}>
                        <b>E-mail:</b> {email}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '20px', color: 'black', textAlign: 'center' }}>
                        Biztosan ezekkel az adatokkal szeretné lefoglalni időpontját?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={() => setModalOpen(false)} variant="contained" color="error" sx={{ flex: 1, marginRight: '5px' }}>
                            Mégse
                        </Button>
                        <Button onClick={() => handleSubmit()} variant="contained" color="primary" sx={{ flex: 1, marginLeft: '5px' }}>
                            OK
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}

export default AdatUrlap;