import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import IdopontokKezelese from './administrative/IdopontokKezelese';
import KorhazakKezelese from './administrative/KorhazakKezelese';
import UjKorhaz from './administrative/UjKorhaz';
import OrvosokKezelese from './administrative/OrvosokKezelese';
import UjOrvos from './administrative/UjOrvos';
import SzakteruletekKezelese from './administrative/SzakteruletekKezelese';
import UjSzakterulet from './administrative/UjSzakterulet';
import SzolgaltatasokKezelese from './administrative/SzolgaltatasokKezelese';
import UjSzolgaltatas from './administrative/UjSzolgaltatas';

function Admin() {
    const [selectedMenu, setSelectedMenu] = useState('');

    const menuItems = [
        { label: "Időpontok kezelése", value: "idopontok" },
        { label: "Kórházak kezelése", value: "korhazak" },
        { label: "Új kórház", value: "ujKorhaz" },
        { label: "Orvosok kezelése", value: "orvosok" },
        { label: "Új orvos", value: "ujOrvos" },
        { label: "Szakterületek kezelése", value: "szakteruletek" },
        { label: "Új szakterület", value: "ujSzakterulet" },
        { label: "Szolgáltatások kezelése", value: "szolgaltatasok" },
        { label: "Új szolgáltatás", value: "ujSzolgaltatas" }
    ];

    const renderContent = () => {
        switch (selectedMenu) {
            case 'idopontok':
                return <IdopontokKezelese />;
            case 'korhazak':
                return <KorhazakKezelese />;
            case 'ujKorhaz':
                return <UjKorhaz />;
            case 'orvosok':
                return <OrvosokKezelese />;
            case 'ujOrvos':
                return <UjOrvos />;
            case 'szakteruletek':
                return <SzakteruletekKezelese />;
            case 'ujSzakterulet':
                return <UjSzakterulet />;
            case 'szolgaltatasok':
                return <SzolgaltatasokKezelese />;
            case 'ujSzolgaltatas':
                return <UjSzolgaltatas />;
            default:
                return <Typography variant='h4'>Üdvözlünk az admin felületen! Kérlek válassz egy menüpontot!</Typography>;
        }
    };

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom right, #9c7b48ff, #f5f5f5)"
        }}>
            <Box sx={{
                height: '70vh',
                width: '110vh',
                display: "flex",
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                backgroundColor: 'white'
            }}>
                <Box sx={{
                    width: '28%',
                    backgroundColor: '#1f1f1f',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2
                }}>
                    <Typography variant="h6" sx={{
                        marginBottom: 3,
                        fontFamily: 'Kaushan Script',
                        color: '#c69b6d'
                    }}>
                        LuxMed Admin
                    </Typography>
        
                    <List sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
                        {menuItems.map((item) => (
                            <ListItem
                            key={item.value}
                            onClick={() => setSelectedMenu(item.value)}
                            className={selectedMenu !== item.value ? "animated-link" : ""}
                            sx={{
                                backgroundColor: selectedMenu === item.value ? '#f5f5f5' : 'transparent',
                                color: selectedMenu === item.value ? '#1f1f1f' : 'white',
                                borderRadius: 1,
                                transition: '0.2s',
                                '&:hover': {
                                    backgroundColor: selectedMenu === item.value ? '#f5f5f5' : 'rgba(255,255,255,0.1)',
                                }
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>                        
                        ))}
                    </List>
                </Box>
        
                <Box sx={{
                    width: '72%',
                    padding: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff'
                }}>
                    {renderContent()}
                </Box>
            </Box>
        </Box>
        
    );
}

export default Admin;