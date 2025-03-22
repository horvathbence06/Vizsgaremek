package hu.backend.converter;

import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.model.Felhasznalo;

import java.util.ArrayList;
import java.util.List;

public class FelhasznaloConverter {
    public static FelhasznaloRead convertModelToRead(Felhasznalo felhasznalo) {
        FelhasznaloRead felhasznaloRead = new FelhasznaloRead();
        felhasznaloRead.setFelhasznaloId(felhasznalo.getFelhasznaloId());
        felhasznaloRead.setFelhasznaloNev(felhasznalo.getFelhasznaloNev());
        felhasznaloRead.setJelszo(felhasznalo.getJelszo());
        felhasznaloRead.setTeljesNev(felhasznalo.getTeljesNev());
        felhasznaloRead.setTelefonszam(felhasznalo.getTelefonszam());
        felhasznaloRead.setEmailCim(felhasznalo.getEmailCim());
        return felhasznaloRead;
    }

    public static Felhasznalo convertSaveToModel(FelhasznaloSave felhasznaloSave){
        Felhasznalo felhasznalo = new Felhasznalo();
        felhasznalo.setFelhasznaloNev(felhasznaloSave.getFelhasznaloNev());
        felhasznalo.setJelszo(felhasznaloSave.getJelszo());
        felhasznalo.setTeljesNev(felhasznaloSave.getTeljesNev());
        felhasznalo.setTelefonszam(felhasznaloSave.getTelefonszam());
        felhasznalo.setEmailCim(felhasznaloSave.getEmailCim());
        return felhasznalo;
    }

    public static FelhasznaloList convertModelToList(Felhasznalo felhasznalo){
        FelhasznaloList felhasznaloList = new FelhasznaloList();
        felhasznaloList.setFelhasznaloId(felhasznalo.getFelhasznaloId());
        felhasznaloList.setFelhasznaloNev(felhasznalo.getFelhasznaloNev());
        felhasznaloList.setJelszo(felhasznalo.getJelszo());
        felhasznaloList.setTeljesNev(felhasznalo.getTeljesNev());
        felhasznaloList.setTelefonszam(felhasznalo.getTelefonszam());
        felhasznaloList.setEmailCim(felhasznalo.getEmailCim());
        return felhasznaloList;
    }

    public static List<FelhasznaloList> convertModelsToLists(List<Felhasznalo> felhasznalok){
        List<FelhasznaloList> felhasznalokList = new ArrayList<>();
        for (Felhasznalo felhasznalo : felhasznalok) {
            felhasznalokList.add(convertModelToList(felhasznalo));
        }
        return felhasznalokList;
    }
}
