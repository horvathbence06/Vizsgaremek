package hu.backend.converter;

import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.orvos.OrvosSave;
import hu.backend.model.Korhaz;
import hu.backend.model.Orvos;
import hu.backend.model.Szakterulet;
import hu.backend.model.Szolgaltatas;

import java.util.ArrayList;
import java.util.List;

public class OrvosConverter {
    public static OrvosRead convertModelToRead(Orvos orvos){
        OrvosRead orvosRead = new OrvosRead();
        orvosRead.setOrvosId(orvos.getOrvosId());
        orvosRead.setNev(orvos.getNev());
        orvosRead.setKepNev(orvos.getKepNev());
        orvosRead.setSzakterulet(SzakteruletConverter.convertModelToRead(orvos.getSzakterulet()));
        orvosRead.setEmail(orvos.getEmail());
        orvosRead.setTelefonszam(orvos.getTelefonszam());
        orvosRead.setKorhaz(KorhazConverter.convertModelToRead(orvos.getKorhaz()));
        return orvosRead;
    }

    public static Orvos convertSaveToModel(OrvosSave orvosSave, Szakterulet szakterulet, Korhaz korhaz){
        Orvos orvos = new Orvos();
        orvos.setNev(orvosSave.getNev());
        orvos.setKepNev(orvosSave.getKepNev());
        orvos.setSzakterulet(szakterulet);
        orvos.setEmail(orvosSave.getEmail());
        orvos.setTelefonszam(orvosSave.getTelefonszam());
        orvos.setKorhaz(korhaz);
        return orvos;
    }

    public static Orvos convertSaveToModel(Integer id, OrvosSave orvosSave, Szakterulet szakterulet, Korhaz korhaz){
        Orvos orvos = new Orvos();
        orvos.setOrvosId(id);
        orvos.setNev(orvosSave.getNev());
        orvos.setKepNev(orvosSave.getKepNev());
        orvos.setSzakterulet(szakterulet);
        orvos.setEmail(orvosSave.getEmail());
        orvos.setTelefonszam(orvosSave.getTelefonszam());
        orvos.setKorhaz(korhaz);
        return orvos;
    }

    public static OrvosList convertModelToList(Orvos orvos){
        OrvosList orvosList = new OrvosList();
        orvosList.setOrvosId(orvos.getOrvosId());
        orvosList.setNev(orvos.getNev());
        orvosList.setKepNev(orvos.getKepNev());
        orvosList.setSzakterulet(SzakteruletConverter.convertModelToList(orvos.getSzakterulet()));
        orvosList.setEmail(orvos.getEmail());
        orvosList.setTelefonszam(orvos.getTelefonszam());
        orvosList.setKorhaz(KorhazConverter.convertModelToList(orvos.getKorhaz()));
        return orvosList;
    }

    public static List<OrvosList> convertModelsToLists(List<Orvos> orvosok){
        List<OrvosList> orvosokLista = new ArrayList<>();
        for (Orvos orvos : orvosok) {
            orvosokLista.add(OrvosConverter.convertModelToList(orvos));
        }
        return orvosokLista;
    }
}
