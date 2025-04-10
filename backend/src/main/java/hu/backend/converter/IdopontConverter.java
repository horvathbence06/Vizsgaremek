package hu.backend.converter;

import hu.backend.dto.idopont.IdopontList;
import hu.backend.dto.idopont.IdopontRead;
import hu.backend.dto.idopont.IdopontSave;
import hu.backend.model.*;

import java.util.ArrayList;
import java.util.List;

public class IdopontConverter {
    public static IdopontRead convertModelToRead(Idopont idopont) {
        IdopontRead idopontRead = new IdopontRead();
        idopontRead.setIdopontId(idopont.getIdopontId());
        idopontRead.setIdo(idopont.getIdo());
        idopontRead.setFoglaloNeve(idopont.getFoglaloNeve());
        idopontRead.setFoglaloTelefonszama(idopont.getFoglaloTelefonszama());
        idopontRead.setFoglaloEmailCim(idopont.getFoglaloEmailCim());
        idopontRead.setOrvos(OrvosConverter.convertModelToRead(idopont.getOrvos()));
        idopontRead.setKorhaz(KorhazConverter.convertModelToRead(idopont.getKorhaz()));
        idopontRead.setSzolgaltatas(SzolgaltatasConverter.convertModelToRead(idopont.getSzolgaltatas()));
        return idopontRead;
    }

    public static Idopont convertSaveToModel(IdopontSave idopontSave, Orvos orvos, Korhaz korhaz, Szolgaltatas szolgaltatas) {
        Idopont idopont = new Idopont();
        idopont.setIdo(idopontSave.getIdo());
        idopont.setFoglaloNeve(idopontSave.getFoglaloNeve());
        idopont.setFoglaloTelefonszama(idopontSave.getFoglaloTelefonszama());
        idopont.setFoglaloEmailCim(idopontSave.getFoglaloEmailCim());
        idopont.setOrvos(orvos);
        idopont.setKorhaz(korhaz);
        idopont.setSzolgaltatas(szolgaltatas);
        return idopont;
    }

    public static IdopontList convertModelToList(Idopont idopont){
        IdopontList idopontList = new IdopontList();
        idopontList.setIdopontId(idopont.getIdopontId());
        idopontList.setIdo(idopont.getIdo());
        idopontList.setFoglaloNeve(idopont.getFoglaloNeve());
        idopontList.setFoglaloTelefonszama(idopont.getFoglaloTelefonszama());
        idopontList.setFoglaloEmailCim(idopont.getFoglaloEmailCim());
        idopontList.setOrvos(OrvosConverter.convertModelToList(idopont.getOrvos()));
        idopontList.setKorhaz(KorhazConverter.convertModelToList(idopont.getKorhaz()));
        idopontList.setSzolgaltatas(SzolgaltatasConverter.convertModelToList(idopont.getSzolgaltatas()));
        return idopontList;
    }

    public static List<IdopontList> convertModelsToLists(List<Idopont> idopontok){
        List<IdopontList> idopontLists = new ArrayList<>();
        for (Idopont idopont : idopontok) {
            idopontLists.add(IdopontConverter.convertModelToList(idopont));
        }
        return idopontLists;
    }
}
