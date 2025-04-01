import { Dialog, DialogContent, Typography, DialogActions, Button } from '@mui/material';

function BetegjogiTajekoztato({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>BETEGJOGI TÁJÉKOZTATÓ</Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>LuxMed Kft.</Typography>
                <Typography>Hatályos: 2025. április 1.-től visszavonásig</Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>1. Bevezetés</strong>
                    <br />
                    A LuxMed Kft. elkötelezett amellett, hogy páciensei számára magas színvonalú egészségügyi ellátást biztosítson, tiszteletben tartva a betegek jogait és méltóságát. Jelen tájékoztató célja, hogy összefoglalja a pácienseket megillető jogokat és a LuxMed Kft. által biztosított garanciákat ezek érvényesülése érdekében.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>2. A betegek jogai</strong>
                    <br />
                    2.1. Egészségügyi ellátáshoz való jog: Minden beteg jogosult az egészségügyi állapotának megfelelő, szakszerű és folyamatos ellátásra, amelyet a LuxMed Kft. szakmai és etikai normák szerint biztosít.
                    <br />
                    2.2. Az emberi méltóság tiszteletben tartásának joga: A betegek jogosultak arra, hogy méltóságukat tiszteletben tartsák, és az ellátás során emberhez méltó bánásmódban részesüljenek. A vizsgálatok és kezelések során a szükséges mértékben biztosított a magánélet védelme.
                    <br />
                    2.3. Tájékoztatáshoz való jog: A betegek jogosultak részletes és közérthető tájékoztatást kapni egészségi állapotukról, a javasolt kezelésekről, azok kockázatairól és alternatíváiról.
                    <br />
                    2.4. Önrendelkezési jog: A betegek szabadon dönthetnek a felajánlott kezelések elfogadásáról vagy elutasításáról, kivéve a jogszabályok által előírt kötelező beavatkozásokat.
                    <br />
                    2.5. Egészségügyi dokumentációhoz való hozzáférés joga: A betegek jogosultak megismerni és másolatot kérni az egészségügyi dokumentációjukról, amely a LuxMed Kft.-nél keletkezett.
                    <br />
                    2.6. Orvosi titoktartás: A betegek egészségügyi adatai és az ellátásuk során keletkezett információk bizalmasak, és csak a beteg hozzájárulásával vagy jogszabályi felhatalmazás alapján adhatók ki harmadik fél számára.
                    <br />
                    2.7. Kapcsolattartási jog: A betegek jogosultak a gyógykezelésük során hozzátartozóikkal kapcsolatot tartani, illetve személyes látogatókat fogadni a kórházi tartózkodásuk alatt, a házirendben foglaltaknak megfelelően.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>3. A betegek kötelezettségei</strong>
                    <br />
                    A betegeknek is vannak kötelezettségeik annak érdekében, hogy az egészségügyi ellátás hatékony és biztonságos legyen:
                    <br />
                    - Valós és teljes körű információt kell szolgáltatniuk egészségi állapotukról, korábbi betegségeikről és kezeléseikről.
                    <br />
                    - Be kell tartaniuk az orvosi utasításokat és kezelési terveket.
                    <br />
                    - Tiszteletben kell tartaniuk az egészségügyi dolgozók és más betegek jogait.
                    <br />
                    - Be kell tartaniuk a LuxMed Kft. házirendjét és az egészségügyi intézmények rendjét.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>4. Jogorvoslati lehetőségek</strong>
                    <br />
                    Ha a beteg úgy érzi, hogy jogai sérültek, panasszal élhet:
                    <br />
                    - A LuxMed Kft.-nél: írásbeli panaszát benyújthatja az ügyfélszolgálati e-mail címen: luxmedinformacio@gmail.com.
                    <br />
                    - A betegjogi képviselőnél: a betegjogi képviselő elérhetőségét a LuxMed Kft. recepción közzéteszi.
                    <br />
                    - Az Egészségügyi Hatóságnál: a Nemzeti Népegészségügyi Központ (NNK) vagy az illetékes kormányhivatal felé fordulhat.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>5. Záró rendelkezések</strong>
                    <br />
                    Jelen Betegjogi Tájékoztató 2025. április 1-jén lép hatályba, és határozatlan időre érvényes. A LuxMed Kft. fenntartja a jogot, hogy a betegjogi tájékoztatót szükség esetén módosítsa.
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

export default BetegjogiTajekoztato;