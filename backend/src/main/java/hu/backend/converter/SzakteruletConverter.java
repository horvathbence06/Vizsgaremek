package hu.backend.converter;

import hu.backend.dto.szakterulet.SzakteruletList;
import hu.backend.dto.szakterulet.SzakteruletRead;
import hu.backend.dto.szakterulet.SzakteruletSave;
import hu.backend.model.Szakterulet;

import java.util.ArrayList;
import java.util.List;

public class SzakteruletConverter {
    public static SzakteruletRead convertModelToRead(Szakterulet szakterulet){
        SzakteruletRead szakteruletRead = new SzakteruletRead();
        szakteruletRead.setSzakteruletId( szakterulet.getSzakteruletId() );
        szakteruletRead.setSzakteruletNev( szakterulet.getSzakteruletNev() );
        return szakteruletRead;
    }

    public static Szakterulet convertSaveToModel(SzakteruletSave szakteruletSave){
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletNev( szakteruletSave.getSzakteruletNev() );
        return szakterulet;
    }

    public static SzakteruletList convertModelToList(Szakterulet szakterulet){
        SzakteruletList szakteruletList = new SzakteruletList();
        szakteruletList.setSzakteruletId( szakterulet.getSzakteruletId() );
        szakteruletList.setSzakteruletNev( szakterulet.getSzakteruletNev() );
        return szakteruletList;
    }

    public static List<SzakteruletList> convertModelsToLists(List<Szakterulet> szakteruletek){
        List<SzakteruletList> szakteruletLista = new ArrayList<>();
        for (Szakterulet szakterulet : szakteruletek) {
            szakteruletLista.add(convertModelToList(szakterulet));
        }
        return szakteruletLista;
    }

}
