import { Dialog, DialogContent, Typography, DialogActions, Button } from '@mui/material';

function AdatkezelesiTajekoztato({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>ADATKEZELÉSI TÁJÉKOZTATÓ</Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>LuxMed Kft.</Typography>
                <Typography>Hatályos: 2025. április 1.-től visszavonásig</Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>1. Bevezető</strong>
                    <br />
                    A jelen Adatkezelési Tájékoztató célja, hogy a LuxMed Kft. tájékoztassa a Pácienseket és egyéb érintetteket a személyes adataik kezeléséről és védelméről.
                    A Szolgáltató elkötelezett a személyes adatok védelme mellett, és az adatkezelés során a hatályos jogszabályoknak, különösen az Európai Parlament és a Tanács (EU) 2016/679 rendeletének (GDPR) megfelelően jár el.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>2. Az adatkezelés célja és jogalapja</strong>
                    <br />
                    A Szolgáltató a következő célokból kezel személyes adatokat:
                    <br />
                    2.1. Egészségügyi szolgáltatások nyújtása:
                    <br />
                    Cél: Diagnosztikai és terápiás szolgáltatások biztosítása
                    <br />
                    Jogalap: GDPR 6. cikk (1) bekezdés b) pont (szerződés teljesítése), valamint GDPR 9. cikk (2) bekezdés h) pont (egészségügyi ellátás)
                    <br />
                    2.2. Időpontfoglalás és kapcsolattartás:
                    <br />
                    Cél: Páciensek időpontfoglalásainak kezelése, tájékoztatás küldése
                    <br />
                    Jogalap: GDPR 6. cikk (1) bekezdés b) pont (szerződés teljesítése)
                    <br />
                    2.3. Számlázás és jogszabályi kötelezettségek teljesítése:
                    <br />
                    Cél: Számlázás, könyvelési és adózási kötelezettségek
                    <br />
                    Jogalap: GDPR 6. cikk (1) bekezdés c) pont (jogi kötelezettség teljesítése)
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>3. A kezelt adatok köre</strong>
                    <br />
                    A Szolgáltató az alábbi személyes adatokat kezelheti:
                    <br />
                    Alapadatok: név, születési dátum, lakcím, elérhetőségek
                    <br />
                    Egészségügyi adatok: kórtörténet, diagnózisok, kezelések, laboreredmények
                    <br />
                    Pénzügyi adatok: számlázási információk
                    <br />
                    Kommunikációs adatok: e-mailek, telefonhívások rögzítése ügyfélszolgálati célból
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>4. Adattovábbítás és adatfeldolgozók</strong>
                    <br />
                    A Szolgáltató az alábbi esetekben továbbíthatja az adatokat harmadik felek számára:
                    <br />
                    Hatóságok és jogszabályi kötelezettségek esetén (pl. NAV, Egészségbiztosítási Pénztár)
                    <br />
                    Egészségügyi partnerek, laboratóriumok, specialisták számára (az ellátás biztosítása érdekében)
                    <br />
                    Könyvelési és IT szolgáltatók számára (szerződés alapján adatfeldolgozóként)
                    <br />
                    Az adattovábbítás minden esetben a hatályos adatvédelmi szabályok betartásával történik.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>5. Adatmegőrzési időtartam</strong>
                    <br />
                    A személyes adatokat a Szolgáltató az alábbi időtartamokig őrzi meg:
                    <br />
                    Egészségügyi dokumentáció: a vonatkozó jogszabályok szerint
                    <br />
                    Számlázási adatok: 8 év
                    <br />
                    Kapcsolattartási és időpontfoglalási adatok: 5 év
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>6. Az érintettek jogai</strong>
                    <br />
                    A Páciens jogosult:
                    <br />
                    Tájékoztatást kérni személyes adatai kezeléséről
                    <br />
                    Hozzáférni a róla kezelt adatokhoz
                    <br />
                    Helyesbítést kérni a pontatlan adatok esetén
                    <br />
                    Törlést kérni (ha az adatkezelés már nem szükséges)
                    <br />
                    Az adatkezelés korlátozását kérni
                    <br />
                    Tiltakozni az adatkezelés ellen (pl. marketing célú adatkezelés esetén)
                    <br />
                    Kérvényeket a luxmedinformacio@gmail.com címen lehet benyújtani. A Szolgáltató a kéréseket 30 napon belül elbírálja.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>7. Adatbiztonsági intézkedések</strong>
                    <br />
                    A Szolgáltató technikai és szervezési intézkedéseket alkalmaz az adatok védelme érdekében, így különösen:
                    <br />
                    Titkosított adattárolás és adatátvitel
                    <br />
                    Jogosultságkezelés az adatokhoz való hozzáférés korlátozása érdekében
                    <br />
                    Rendszeres biztonsági mentések
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>8. Jogorvoslati lehetőségek</strong>
                    <br />
                    Ha a Páciens úgy érzi, hogy az adatkezelés nem megfelelő, panaszt tehet:
                    <br />
                    Közvetlenül a LuxMed Kft.-nél a luxmedinformacio@gmail.com címen
                    <br />
                    A Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)
                    <br />
                    Cím: 1055 Budapest, Falk Miksa utca 9-11.
                    <br />
                    Weboldal: www.naih.hu
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>9. Záró rendelkezések</strong>
                    <br />
                    9.1. A jelen Adatkezelési Tájékoztató hatályba lépésének napja: 2025. április 1.
                    <br />
                    9.2. A Szolgáltató fenntartja a jogot, hogy az adatkezelési tájékoztatót szükség esetén módosítsa. A módosításokat a LuxMed Kft. honlapján közzéteszi.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    Kelt: 2025. április 1.
                    <br />
                    LuxMed Kft.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{ backgroundColor: 'black', color: 'white' }}>
                    ELFOGADOM
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AdatkezelesiTajekoztato;