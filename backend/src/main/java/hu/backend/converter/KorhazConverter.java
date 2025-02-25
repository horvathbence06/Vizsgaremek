package hu.backend.converter;

import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.korhaz.KorhazSave;
import hu.backend.model.Korhaz;

import java.util.ArrayList;
import java.util.List;

public class KorhazConverter {
    public static KorhazRead convertModelToRead(Korhaz korhaz){
        KorhazRead korhazRead = new KorhazRead();
        korhazRead.setKorhazId(korhaz.getKorhazId());
        korhazRead.setKorhazNev(korhaz.getKorhazNev());
        korhazRead.setKepNev(korhaz.getKepNev());
        korhazRead.setKorhazCim(korhaz.getKorhazCim());
        return korhazRead;
    }

    public static Korhaz convertSaveToModel(KorhazSave save){
        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazNev(save.getKorhazNev());
        korhaz.setKepNev(save.getKepNev());
        korhaz.setKorhazCim(save.getKorhazCim());
        return korhaz;
    }

    public static KorhazList convertModelToList(Korhaz korhaz){
        KorhazList korhazList = new KorhazList();
        korhazList.setKorhazId(korhaz.getKorhazId());
        korhazList.setKorhazNev(korhaz.getKorhazNev());
        korhazList.setKepNev(korhaz.getKepNev());
        korhazList.setKorhazCim(korhaz.getKorhazCim());
        return korhazList;
    }

    public static List<KorhazList> convertModelsToLists(List<Korhaz> korhazak){
        List<KorhazList> korhazLista = new ArrayList<>();
        for (Korhaz korhaz : korhazak) {
            korhazLista.add(convertModelToList(korhaz));
        }
        return korhazLista;
    }
}
