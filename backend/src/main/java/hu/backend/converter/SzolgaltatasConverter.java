package hu.backend.converter;

import hu.backend.dto.szolgaltatas.SzolgaltatasList;
import hu.backend.dto.szolgaltatas.SzolgaltatasRead;
import hu.backend.dto.szolgaltatas.SzolgaltatasSave;
import hu.backend.model.Szakterulet;
import hu.backend.model.Szolgaltatas;

import java.util.ArrayList;
import java.util.List;

public class SzolgaltatasConverter {
    public static SzolgaltatasRead convertModelToRead(Szolgaltatas szolgaltatas) {
        SzolgaltatasRead szolgaltatasRead = new SzolgaltatasRead();
        szolgaltatasRead.setSzolgaltatasId( szolgaltatas.getSzolgaltatasId() );
        szolgaltatasRead.setSzolgaltatasNev(szolgaltatas.getSzolgaltatasNev());
        szolgaltatasRead.setSzakterulet(SzakteruletConverter.convertModelToRead(szolgaltatas.getSzakterulet()));
        szolgaltatasRead.setAr(szolgaltatas.getAr());
        return szolgaltatasRead;
    }

    public static Szolgaltatas convertSaveToModel(SzolgaltatasSave szolgaltatasSave, Szakterulet szakterulet){
        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasNev( szolgaltatasSave.getSzolgaltatasNev() );
        szolgaltatas.setSzakterulet( szakterulet );
        szolgaltatas.setAr( szolgaltatasSave.getAr() );
        return szolgaltatas;
    }

    public static Szolgaltatas convertSaveToModel(Integer id, SzolgaltatasSave szolgaltatasSave, Szakterulet szakterulet){
        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId( id );
        szolgaltatas.setSzolgaltatasNev( szolgaltatasSave.getSzolgaltatasNev() );
        szolgaltatas.setSzakterulet( szakterulet );
        szolgaltatas.setAr( szolgaltatasSave.getAr() );
        return szolgaltatas;
    }

    public static SzolgaltatasList convertModelToList(Szolgaltatas szolgaltatas){
        SzolgaltatasList list = new SzolgaltatasList();
        list.setSzolgaltatasId(szolgaltatas.getSzolgaltatasId() );
        list.setSzolgaltatasNev(szolgaltatas.getSzolgaltatasNev());
        list.setSzakterulet(SzakteruletConverter.convertModelToList(szolgaltatas.getSzakterulet()));
        list.setAr(szolgaltatas.getAr());
        return list;
    }

    public static List<SzolgaltatasList> convertModelsToLists(List<Szolgaltatas> szolgaltatasok){
        List<SzolgaltatasList> szolgaltatasLista = new ArrayList<>();
        for (Szolgaltatas szolgaltatas : szolgaltatasok) {
            szolgaltatasLista.add(SzolgaltatasConverter.convertModelToList(szolgaltatas));
        }
        return szolgaltatasLista;
    }
}
