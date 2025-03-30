import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from "axios";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function OrvosokKezelese() {
    const [orvosok, setOrvosok] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [open, setOpen] = useState(false);
    const [selectedOrvos, setSelectedOrvos] = useState(null);
    const [nev, setNev] = useState("");
    const [kepNev, setKepNev] = useState("");
    const [email, setEmail] = useState("");
    const [telefonszam, setTelefonszam] = useState("");
    const [szakteruletId, setSzakteruletId] = useState(""); 
    const [korhazId, setKorhazId] = useState(""); 
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteOrvosId, setDeleteOrvosId] = useState(null);
    const [szakteruletek, setSzakteruletek] = useState([]);
    const [korhazak, setKorhazak] = useState([]);
    const [selectedKorhazId, setSelectedKorhazId] = useState(""); 

    useEffect(() => {
        loadOrvosok();

        axios.get(`http://localhost:8080/szakterulet/list-all`)
            .then((response) => {
                setSzakteruletek(response.data);
            }).catch((error) => {
                console.log(error.message);
            });

        axios.get(`http://localhost:8080/korhaz/list-all`)
            .then((response) => {
                setKorhazak(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const loadOrvosok = (korhazId = "") => {
        const url = korhazId ? `http://localhost:8080/orvos/filter/by-korhaz?korhazId=${korhazId}` : `http://localhost:8080/orvos/list-all`;
        axios.get(url)
            .then((response) => {
                setOrvosok(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOpen = (orvos) => {
        setSelectedOrvos(orvos);
        setNev(orvos.nev);
        setKepNev(orvos.kepNev);
        setEmail(orvos.email);
        setTelefonszam(orvos.telefonszam);
        setSzakteruletId(orvos.szakteruletId || ""); 
        setKorhazId(orvos.korhazId || ""); 
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedOrvos(null);
    };

    const handleUpdate = () => {
        if (selectedOrvos) {
            axios.put(`http://localhost:8080/orvos/${selectedOrvos.orvosId}`, {
                nev: nev,
                kepNev: kepNev,
                szakteruletId: szakteruletId,
                email: email,
                telefonszam: telefonszam,
                korhazId: korhazId
            })
                .then(() => {
                    setOrvosok(orvosok.map(orvos =>
                        orvos.orvosId === selectedOrvos.orvosId
                            ? { ...orvos, nev, kepNev, szakteruletId, email, telefonszam, korhazId }
                            : orvos
                    ));
                    handleClose();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleDelete = (orvosId) => {
        setDeleteOrvosId(orvosId);
        setDeleteOpen(true);
    };

    const handleDeleteConfirm = () => {
        axios.delete(`http://localhost:8080/orvos/${deleteOrvosId}`)
            .then(() => {
                setOrvosok(orvosok.filter(orvos => orvos.orvosId !== deleteOrvosId));
                setDeleteOpen(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleKorhazChange = (event) => {
        const korhazId = event.target.value;
        setSelectedKorhazId(korhazId);
        loadOrvosok(korhazId);
    };

    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Orvosok kezelése felület</Typography>
            <Typography variant='h6'>Orvosok listázása, szerkesztése és törlése</Typography>
            <FormControl fullWidth sx={{ marginTop: '1vh', maxWidth: 300 }}>
                <Select
                    value={selectedKorhazId}
                    onChange={handleKorhazChange}
                    sx={{ minWidth: 120 }} 
                >
                    <MenuItem value="">
                        <em>Minden orvos</em>
                    </MenuItem>
                    {korhazak.map((korhaz) => (
                        <MenuItem key={korhaz.korhazId} value={korhaz.korhazId}>
                            {korhaz.korhazNev}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                            <TableCell sx={{ color: 'white' }}><strong>Orvos neve</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Szakterület</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Akciók</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orvosok.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((orvos) => (
                            <TableRow
                                key={orvos.orvosId}
                                sx={{
                                    backgroundColor: 'white',
                                    '&:hover': {
                                        backgroundColor: '#9c7b48ff',
                                        color: 'white',
                                        '& td': {
                                            color: 'white',
                                        }
                                    }
                                }}
                            >
                                <TableCell>{orvos.nev}</TableCell>
                                <TableCell>{orvos.szakterulet.szakteruletNev}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#9c7b48ff',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                }
                                            }}
                                            onClick={() => handleOpen(orvos)}
                                        >
                                            Szerkesztés
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: 'darkgray',
                                                }
                                            }}
                                            onClick={() => handleDelete(orvos.orvosId)}>
                                        Törlés
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={orvosok.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelDisplayedRows={({ from, to }) => `${from}-${to}`}
                ActionsComponent={(subProps) => (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <IconButton onClick={(event) => handleChangePage(event, subProps.page - 1)} disabled={subProps.page === 0}>
                            <KeyboardArrowLeft />
                        </IconButton>
                        <IconButton onClick={(event) => handleChangePage(event, subProps.page + 1)} disabled={subProps.page >= Math.ceil(subProps.count / rowsPerPage) - 1}>
                            <KeyboardArrowRight />
                        </IconButton>
                    </Box>
                )}
            />
            <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { backgroundColor: 'white', color: 'black', padding: 2 } }}>
                <DialogTitle sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold' }}>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'red' }}>
                        <CloseIcon />
                    </IconButton>
                    Orvos adatainak módosítása
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <TextField
                        label="Orvos neve"
                        variant="outlined"
                        value={nev}
                        onChange={(e) => setNev(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Kép Neve"
                        variant="outlined"
                        value={kepNev}
                        onChange={(e) => setKepNev(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Telefonszám"
                        variant="outlined"
                        value={telefonszam}
                        onChange={(e) => setTelefonszam(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Szakterület</InputLabel>
                        <Select
                            value={szakteruletId || ""}
                            onChange={(e) => setSzakteruletId(e.target.value)}
                        >
                            {szakteruletek.map((szakterulet) => (
                                <MenuItem key={szakterulet.szakteruletId} value={szakterulet.szakteruletId}>
                                    {szakterulet.szakteruletNev}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <InputLabel>Kórház</InputLabel>
                        <Select
                            value={korhazId || ""}
                            onChange={(e) => setKorhazId(e.target.value)}
                        >
                            {korhazak.map((korhaz) => (
                                <MenuItem key={korhaz.korhazId} value={korhaz.korhazId}>
                                    {korhaz.korhazNev}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdate} sx={{ backgroundColor: '#9c7b48ff', color: 'black' }}>OK</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} sx={{ '& .MuiDialog-paper': { backgroundColor: 'white', color: 'black', padding: 2 } }}>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Törlés megerősítése</DialogTitle>
                <DialogContent sx={{ textAlign: 'center' }}>
                    <Typography>Biztosan törölni szeretné a kiválasztott orvost?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} sx={{ color: 'black' }}>Mégse</Button>
                    <Button onClick={handleDeleteConfirm} sx={{ backgroundColor: '#9c7b48ff', color: 'white' }}>OK</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default OrvosokKezelese;