import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from "axios";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

function IdopontokKezelese() {
    const [idopontok, setIdopontok] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [open, setOpen] = useState(false);
    const [selectedIdopont, setSelectedIdopont] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/idopont/list-all`)
            .then((response) => {
                setIdopontok(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = date.toLocaleString('hu-HU', options);
        return formattedDate.replace(',', ''); 
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    const handleOpen = (idopont) => {
        setSelectedIdopont(idopont);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedIdopont(null);
    };

    const handleDelete = () => {
        if (selectedIdopont) {
            axios.delete(`http://localhost:8080/idopont/${selectedIdopont.idopontId}`)
                .then(() => {
                    setIdopontok(idopontok.filter(idopont => idopont.idopontId !== selectedIdopont.idopontId));
                    handleClose();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    return (
        <Box sx={{ textAlign: 'center', padding: { xs: 2, md: 4 } }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>Időpontok kezelése felület</Typography>
            <Typography variant='h6' sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Időpontok listázása és törlése</Typography>
            <TableContainer component={Paper} sx={{ marginTop: 2, width: '100%' }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#1f1f1f', color: 'white' }}>
                            <TableCell sx={{ color: 'white' }}><strong>Foglaló neve</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Foglaló telefonszáma</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Foglaló e-mail címe</strong></TableCell>
                            <TableCell sx={{ color: 'white' }}><strong>Idő</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {idopontok.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((idopont) => (
                            <TableRow 
                                key={idopont.idopontId}
                                onClick={() => handleOpen(idopont)} 
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#9c7b48ff',
                                        color: 'white',
                                        '& td': {
                                            color: 'white', 
                                        }
                                    }
                                }}
                            >
                                <TableCell>{idopont.foglaloNeve}</TableCell>
                                <TableCell>{idopont.foglaloTelefonszama}</TableCell>
                                <TableCell>{idopont.foglaloEmailCim}</TableCell>
                                <TableCell>{formatDate(idopont.ido)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={idopontok.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelDisplayedRows={({ from, to }) => `${from}-${to}`} 
                ActionsComponent={(subProps) => (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <IconButton onClick={(event) => handleChangePage(event, subProps.page - 1)} disabled={subProps.page ===  0}>
                            <KeyboardArrowLeft />
                        </IconButton>
                        <IconButton onClick={(event) => handleChangePage(event, subProps.page + 1)} disabled={subProps.page >= Math.ceil(subProps.count / rowsPerPage) - 1}>
                            <KeyboardArrowRight />
                        </IconButton>
                    </Box>
                )}
            />
            <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { backgroundColor: 'white', color: 'black', padding: 2 } }}>
                <DialogTitle sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold' }}>Időpont részletei</DialogTitle>
                <DialogContent sx={{ textAlign: 'center', marginBottom: 2 }}>
                    {selectedIdopont && (
                        <Box>
                            <Typography sx={{ marginBottom: 1 }}><strong>Név:</strong> {selectedIdopont.foglaloNeve}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Idő:</strong> {formatDate(selectedIdopont.ido)}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Telefonszám:</strong> {selectedIdopont.foglaloTelefonszama}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Email:</strong> {selectedIdopont.foglaloEmailCim}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Orvos neve:</strong> {selectedIdopont.orvos.nev}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Kórház neve:</strong> {selectedIdopont.korhaz.korhazNev}</Typography>
                            <Typography sx={{ marginBottom: 1 }}><strong>Szolgáltatás neve:</strong> {selectedIdopont.szolgaltatas.szolgaltatasNev}</Typography>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ backgroundColor: '#9c7b48ff', color: 'black' }}>Bezárás</Button>
                    <Button onClick={handleDelete} sx={{ backgroundColor: 'black', color: 'white' }}>Törlés</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default IdopontokKezelese;