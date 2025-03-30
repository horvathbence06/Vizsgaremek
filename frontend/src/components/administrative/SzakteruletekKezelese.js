import { Box, Typography, Card, CardContent, CardActions, Button, Dialog, DialogActions, DialogTitle, Pagination, PaginationItem, DialogContent } from "@mui/material";
import { useEffect, useState } from 'react';
import axios from "axios";

function SzakteruletekKezelese() {
    const [szakteruletek, setSzakteruletek] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedSzakterulet, setSelectedSzakterulet] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [page, setPage] = useState(1);
    const rowsPerPage = 6;

    useEffect(() => {
        axios.get(`http://localhost:8080/szakterulet/list-all`)
            .then((response) => {
                setSzakteruletek(response.data);
            }).catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleOpen = (szakterulet) => {
        setSelectedSzakterulet(szakterulet);
        setConfirmOpen(true);
    };

    const handleClose = () => {
        setConfirmOpen(false);
        setSelectedSzakterulet(null);
    };

    const handleDelete = () => {
        if (selectedSzakterulet) {
            axios.delete(`http://localhost:8080/szakterulet/${selectedSzakterulet.szakteruletId}`)
                .then(() => {
                    setSzakteruletek(szakteruletek.filter(szakterulet => szakterulet.szakteruletId !== selectedSzakterulet.szakteruletId));
                    handleClose();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const paginatedSzakteruletek = szakteruletek.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Szakterületek kezelése felület</Typography>
            <Typography variant='h6'>Szakterületek listázása és törlése</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 2 }}>
                {paginatedSzakteruletek.map((szakterulet) => (
                    <Card
                        key={szakterulet.szakteruletId}
                        sx={{
                            margin: 1,
                            width: 250,
                            backgroundColor: '#9c7b48ff',
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            }
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                                {szakterulet.szakteruletNev}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                            <Button
                                size="small"
                                onClick={() => handleOpen(szakterulet)}
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }
                                }}
                            >
                                Törlés
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Pagination
                    count={Math.ceil(szakteruletek.length / rowsPerPage)}
                    page={page}
                    onChange={handleChangePage}
                    sx={{ marginTop: 2 }}
                    showFirstButton={false}
                    showLastButton={false}
                    components={{
                        next: (props) => <Button {...props}>→</Button>,
                        previous: (props) => <Button {...props}>←</Button>,
                    }}
                    renderItem={(item) => (
                        <PaginationItem
                            {...item}
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#9c7b48ff !important",
                                    color: "white !important",
                                    borderRadius: "5px",
                                },
                            }}
                        />
                    )}
                />


            </Box>
            <Dialog
                open={confirmOpen}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'white',
                        color: 'black',
                        padding: 3,
                        borderRadius: 3,  
                        minWidth: 400, 
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        color: '#333'
                    }}
                >
                    Törlés megerősítése
                </DialogTitle>

                <DialogContent sx={{ textAlign: 'center', paddingX: 3 }}>
                    <Typography variant="body1">
                        Biztosan törölni szeretnéd a kiválasztott szakterületet?
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center', paddingBottom: 3 }}>
                    <Button
                        onClick={handleClose}
                        sx={{
                            backgroundColor: '#9c7b48ff',
                            color: 'white',
                            borderRadius: 2,
                            paddingX: 3,
                            '&:hover': {
                                backgroundColor: '#8a693e',
                            }
                        }}
                    >
                        Mégse
                    </Button>

                    <Button
                        onClick={handleDelete}
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: 2,
                            paddingX: 3,
                            '&:hover': {
                                backgroundColor: '#333',
                            }
                        }}
                    >
                        Törlés
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default SzakteruletekKezelese;