import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from "axios";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function SzolgaltatasokKezelese() {
    const [szolgaltatasok, setSzolgaltatasok] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [open, setOpen] = useState(false);
    const [selectedSzolgaltatas, setSelectedSzolgaltatas] = useState(null);
    const [szolgaltatasNev, setSzolgaltatasNev] = useState("");
    const [ar, setAr] = useState("");
    const [szakteruletId, setSzakteruletId] = useState(""); 
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteSzolgaltatasId, setDeleteSzolgaltatasId] = useState(null);
    const [szakteruletek, setSzakteruletek] = useState([]);

    useEffect(() => {
        loadSzolgaltatasok();

        axios.get(`http://localhost:8080/szakterulet/list-all`)
            .then((response) => {
                setSzakteruletek(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const loadSzolgaltatasok = () => {
        axios.get(`http://localhost:8080/szolgaltatas/list-all`)
            .then((response) => {
                setSzolgaltatasok(response.data);
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

    const handleOpen = (szolgaltatas) => {
        setSelectedSzolgaltatas(szolgaltatas);
        setSzolgaltatasNev(szolgaltatas.szolgaltatasNev);
        setAr(szolgaltatas.ar);
        setSzakteruletId(szolgaltatas.szakteruletId || ""); 
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedSzolgaltatas(null);
    };

    const handleUpdate = () => {
        if (selectedSzolgaltatas) {
            axios.put(`http://localhost:8080/szolgaltatas/${selectedSzolgaltatas.szolgaltatasId}`, {
                nev: szolgaltatasNev,
                ar: ar,
                szakteruletId: szakteruletId
            })
                .then(() => {
                    setSzolgaltatasok(szolgaltatasok.map(szolgaltatas =>
                        szolgaltatas.szolgaltatasId === selectedSzolgaltatas.szolgaltatasId
                            ? { ...szolgaltatas, szolgaltatasNev, ar, szakteruletId }
                            : szolgaltatas
                    ));
                    handleClose();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleDelete = (szolgaltatasId) => {
        setDeleteSzolgaltatasId(szolgaltatasId);
        setDeleteOpen(true);
    };

    const handleDeleteConfirm = () => {
        axios.delete(`http://localhost:8080/szolgaltatas/${deleteSzolgaltatasId}`)
            .then(() => {
                setSzolgaltatasok(szolgaltatasok.filter(szolgaltatas => szolgaltatas.szolgaltatasId !== deleteSzolgaltatasId));
                setDeleteOpen(false);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // Formázó függvény az ár megjelenítéséhez
    const formatPrice = (price) => {
        return new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Szolgáltatások kezelése felület</Typography>
            <Typography variant='h6'>Szolgáltatások listázása, szerkesztése és törlése</Typography>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                            <TableCell sx={{ color: 'white' }}><strong>Szolgáltatás neve</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Szakterület</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Ár</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Akciók</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {szolgaltatasok.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((szolgaltatas) => (
                            <TableRow
                                key={szolgaltatas.szolgaltatasId}
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
                                <TableCell>{szolgaltatas.szolgaltatasNev}</TableCell>
                                <TableCell>{szolgaltatas.szakterulet.szakteruletNev}</TableCell>
                                <TableCell>{formatPrice(szolgaltatas.ar)}</TableCell>
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
                                            onClick={() => handleOpen(szolgaltatas)}
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
                                            onClick={() => handleDelete(szolgaltatas.szolgaltatasId)}>
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
                count={szolgaltatasok.length}
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
                    Szolgáltatás adatainak módosítása
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <TextField
                        label="Szolgáltatás neve"
                        variant="outlined"
                        value={szolgaltatasNev}
                        onChange={(e) => setSzolgaltatasNev(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Ár"
                        variant="outlined"
                        value={ar}
                        onChange={(e) => setAr(e.target.value)}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        type="number"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdate} sx={{ backgroundColor: '#9c7b48ff', color: 'black' }}>OK</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} sx={{ '& .MuiDialog-paper': { backgroundColor: 'white', color: 'black', padding: 2 } }}>
                <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Törlés megerősítése</DialogTitle>
                <DialogContent sx={{ textAlign: 'center' }}>
                    <Typography>Biztosan törölni szeretné a kiválasztott szolgáltatást?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} sx={{ color: 'black' }}>Mégse</Button>
                    <Button onClick={handleDeleteConfirm} sx={{ backgroundColor: '#9c7b48ff', color: 'white' }}>OK</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default SzolgaltatasokKezelese;