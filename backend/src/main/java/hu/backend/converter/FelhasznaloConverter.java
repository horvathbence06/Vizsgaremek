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
        felhasznaloRead.setAdmin(felhasznalo.getAdmin());
        return felhasznaloRead;
    }

    public static Felhasznalo convertSaveToModel(FelhasznaloSave felhasznaloSave){
        Felhasznalo felhasznalo = new Felhasznalo();
        felhasznalo.setFelhasznaloNev(felhasznaloSave.getFelhasznaloNev());
        felhasznalo.setJelszo(felhasznaloSave.getJelszo());
        felhasznalo.setTeljesNev(felhasznaloSave.getTeljesNev());
        felhasznalo.setAdmin(felhasznaloSave.getAdmin());
        return felhasznalo;
    }

    public static Felhasznalo convertSaveToModel(Integer id, FelhasznaloSave felhasznaloSave){
        Felhasznalo felhasznalo = new Felhasznalo();
        felhasznalo.setFelhasznaloId(id);
        felhasznalo.setFelhasznaloNev(felhasznaloSave.getFelhasznaloNev());
        felhasznalo.setJelszo(felhasznaloSave.getJelszo());
        felhasznalo.setTeljesNev(felhasznaloSave.getTeljesNev());
        felhasznalo.setAdmin(felhasznaloSave.getAdmin());
        return felhasznalo;
    }

    public static FelhasznaloList convertModelToList(Felhasznalo felhasznalo){
           FelhasznaloList felhasznaloList = new FelhasznaloList();
           felhasznaloList.setFelhasznaloId(felhasznalo.getFelhasznaloId());
           felhasznaloList.setFelhasznaloNev(felhasznalo.getFelhasznaloNev());
           felhasznaloList.setJelszo(felhasznalo.getJelszo());
           felhasznaloList.setTeljesNev(felhasznalo.getTeljesNev());
           felhasznaloList.setAdmin(felhasznalo.getAdmin());
           return felhasznaloList;
    }

    public static List<FelhasznaloList> convertModelsToLists(List<Felhasznalo> felhasznalok){
        List<FelhasznaloList> felhasznalokLista = new ArrayList<>();
        for (Felhasznalo felhasznalo : felhasznalok) {
            felhasznalokLista.add(FelhasznaloConverter.convertModelToList(felhasznalo));
        }
        return felhasznalokLista;
    }
}
