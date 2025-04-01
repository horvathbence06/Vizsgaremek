import { Dialog, DialogContent, Typography, DialogActions, Button } from '@mui/material';

function ASZF({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>LuxMed Kft.</Typography>
                <Typography>Hatályos: 2025. április 1.-től visszavonásig</Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>1. Bevezető rendelkezések</strong>
                    <br />
                    1.1. A jelen Általános Szerződési Feltételek (a továbbiakban: "ÁSZF") a LuxMed Kft., mint egészségügyi szolgáltató (továbbiakban: "Szolgáltató") és az általa nyújtott egészségügyi szolgáltatásokat igénybe vevő természetes személyek (továbbiakban: "Páciens") jogait és kötelezettségeit tartalmazza.
                    <br />
                    1.2. Az ÁSZF kiterjed a LuxMed Kft. által üzemeltetett nyolc magánkórházban nyújtott egészségügyi szolgáltatásokra, ideértve a járóbeteg-ellátást, fekvőbeteg-ellátást, diagnosztikai vizsgálatokat és egyéb kapcsolódó szolgáltatásokat.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>2. Szolgáltatások igénybevétele</strong>
                    <br />
                    2.1. A Páciens a Szolgáltató szolgáltatásait előzetes időpontfoglalás alapján veheti igénybe, amely történhet személyesen, telefonon vagy online felületen keresztül.
                    <br />
                    2.2. A Páciens köteles a szolgáltatás igénybevételére vonatkozó feltételeket elfogadni és az esetleges egészségügyi adatlapot kitölteni.
                    <br />
                    2.3. A Szolgáltató fenntartja a jogot, hogy a szolgáltatás nyújtását indokolt esetben (pl. egészségügyi kockázat) megtagadja.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>3. Díjak és fizetési feltételek</strong>
                    <br />
                    3.1. A Szolgáltató által nyújtott egészségügyi szolgáltatások díjai a LuxMed Kft. honlapján és az egyes kórházak recepcióján érhetők el.
                    <br />
                    3.2. A szolgáltatások díja készpénzzel, bankkártyával vagy egyéb, a Szolgáltató által elfogadott fizetési módon egyenlíthető ki.
                    <br />
                    3.3. A Páciens vállalja, hogy az igénybe vett szolgáltatás ellenértékét a szolgáltatás teljesítésekor, legkésőbb a távozás előtt rendezi.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>4. Lemondás és módosítás</strong>
                    <br />
                    4.1. A Páciens köteles a foglalt időpontot legkésőbb 24 órával a szolgáltatás igénybevétele előtt lemondani vagy módosítani. Ellenkező esetben a Szolgáltató jogosult a szolgáltatás teljes díját felszámítani.
                    <br />
                    4.2. A Szolgáltató fenntartja a jogot, hogy indokolt esetben (pl. orvosi vészhelyzet) az előre egyeztetett időpontot módosítsa.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>5. Felelősség és panaszkezelés</strong>
                    <br />
                    5.1. A Szolgáltató felelőssége kizárólag az általa nyújtott szolgáltatások szakszerűségére terjed ki, a Páciens által elmulasztott tájékoztatásból eredő károkért nem vállal felelősséget.
                    <br />
                    5.2. A Páciens jogosult panaszt tenni a Szolgáltató ügyfélszolgálatán vagy írásban a luxmedinformacio@gmail.com e-mail címen.
                    <br />
                    5.3. A Szolgáltató köteles a panaszt a beérkezéstől számított 30 napon belül kivizsgálni és a Pácienst írásban tájékoztatni az eredményről.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>6. Adatvédelem és titoktartás</strong>
                    <br />
                    6.1. A Szolgáltató a Páciens személyes és egészségügyi adatait a hatályos jogszabályoknak megfelelően kezeli és titokban tartja.
                    <br />
                    6.2. Az adatkezelés részleteit a LuxMed Kft. Adatkezelési tájékoztatója tartalmazza.
                </Typography>
                <Typography sx={{ marginTop: 2 }}>
                    <strong>7. Záró rendelkezések</strong>
                    <br />
                    7.1. A jelen ÁSZF hatályba lépésének napja: 2025. április 1.
                    <br />
                    7.2. A Szolgáltató jogosult az ÁSZF-et egyoldalúan módosítani. A módosított feltételek a közzététel napjától érvényesek.
                    <br />
                    7.3. Jelen ÁSZF-ben nem szabályozott kérdésekben a magyar jog irányadó.
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

export default ASZF;