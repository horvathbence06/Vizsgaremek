import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from "axios";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function KorhazakKezelese() {
    const [korhazak, setKorhazak] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [open, setOpen] = useState(false);
    const [selectedKorhaz, setSelectedKorhaz] = useState(null);
    const [korhazNev, setKorhazNev] = useState("");
    const [korhazCim, setKorhazCim] = useState("");
    const [korhazKepNev, setKorhazKepNev] = useState("");
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteKorhazId, setDeleteKorhazId] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/korhaz/list-all`)
            .then((response) => {
                setKorhazak(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    const handleOpen = (korhaz) => {
        setSelectedKorhaz(korhaz);
        setKorhazNev(korhaz.korhazNev);
        setKorhazCim(korhaz.korhazCim);
        setKorhazKepNev(korhaz.kepNev);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedKorhaz(null);
    };

    const handleUpdate = () => {
        if (selectedKorhaz) {
            axios.put(`http://localhost:8080/korhaz/${selectedKorhaz.korhazId}`, {
                korhazNev: korhazNev,
                korhazCim: korhazCim,
                kepNev: korhazKepNev
            })
            .then(() => {
                setKorhazak(korhazak.map(korhaz => 
                    korhaz.korhazId === selectedKorhaz.korhazId 
                    ? { ...korhaz, korhazNev, korhazCim, kepNev: korhazKepNev } 
                    : korhaz
                ));
                handleClose();
            })
            .catch((error) => {
                console.log(error.message);
            });
        }
    };

    const handleDelete = (korhazId) => {
        setDeleteKorhazId(korhazId);
        setDeleteOpen(true);
    };

    const handleDeleteConfirm = () => {
        axios.delete(`http://localhost:8080/korhaz/${deleteKorhazId}`)
            .then(() => {
                setKorhazak(korhazak.filter(korhaz => korhaz.korhazId !== deleteKorhazId));
                setDeleteOpen(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Kórházak kezelése felület</Typography>
            <Typography variant='h6'>Kórházak listázása, szerkesztése és törlése</Typography>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                            <TableCell sx={{ color: 'white' }}><strong>Kórház neve</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Kórház címe</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Akciók</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {korhazak.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((korhaz) => (
                            <TableRow 
                                key={korhaz.korhazId}
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
                                <TableCell>{korhaz.korhazNev}</TableCell>
                                <TableCell>{korhaz.korhazCim}</TableCell>
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
                                            onClick={() => handleOpen(korhaz)}
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
                                            onClick={() => handleDelete(korhaz.korhazId)}
                                        >
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
                count={korhazak.length}
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
                    Kórház adatainak módosítása
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <TextField
                        label="Kórház neve"
                        variant="outlined"
                        value={korhazNev}
                        onChange={(e) => setKorhazNev(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Kórház címe"
                        variant="outlined"
                        value={korhazCim}
                        onChange={(e) => setKorhazCim(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Kép neve"
                        variant="outlined"
                        value={korhazKepNev}
                        onChange={(e) => setKorhazKepNev(e.target.value)}
                        fullWidth
                        sx={{ marginTop: 2 }} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdate} sx={{ backgroundColor: '#9c7b48ff', color: 'black' }}>OK</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} sx={{ '& .MuiDialog-paper': { backgroundColor: 'white', color: 'black', padding: 2 } }}>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Törlés megerősítése</DialogTitle>
                <DialogContent sx={{ textAlign: 'center' }}>
                    <Typography>Biztosan törölni szeretné a kiválasztott kórházat?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} sx={{ color: 'black'}}>Mégse</Button>
                    <Button onClick={handleDeleteConfirm} sx={{ backgroundColor: '#9c7b48ff', color: 'white' }}>OK</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default KorhazakKezelese;