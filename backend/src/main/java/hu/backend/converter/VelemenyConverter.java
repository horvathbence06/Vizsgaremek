package hu.backend.converter;

import hu.backend.dto.velemeny.VelemenyList;
import hu.backend.dto.velemeny.VelemenyRead;
import hu.backend.dto.velemeny.VelemenySave;
import hu.backend.model.Felhasznalo;
import hu.backend.model.Orvos;
import hu.backend.model.Velemeny;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class VelemenyConverter {
    public static VelemenyRead convertModelToRead(Velemeny velemeny){
        VelemenyRead velemenyRead = new VelemenyRead();
        velemenyRead.setVelemenyId(velemeny.getVelemenyId());
        velemenyRead.setVelemenyText(velemeny.getVelemenyText());
        velemenyRead.setFelhasznalo(FelhasznaloConverter.convertModelToRead(velemeny.getFelhasznalo()));
        velemenyRead.setOrvos(OrvosConverter.convertModelToRead(velemeny.getOrvos()));
        velemenyRead.setBejegyzesIdo(velemeny.getBejegyzesIdo());
        return velemenyRead;
    }

    public static Velemeny convertSaveToModel(VelemenySave velemenySave, Felhasznalo felhasznalo, Orvos orvos){
        Velemeny velemeny = new Velemeny();
        velemeny.setVelemenyText(velemenySave.getVelemenyText());
        velemeny.setFelhasznalo(felhasznalo);
        velemeny.setOrvos(orvos);
        velemeny.setBejegyzesIdo(LocalDateTime.now());
        return velemeny;
    }

    public static Velemeny convertSaveToModel(Integer id, VelemenySave velemenySave, Felhasznalo felhasznalo, Orvos orvos){
        Velemeny velemeny = new Velemeny();
        velemeny.setVelemenyId(id);
        velemeny.setVelemenyText(velemenySave.getVelemenyText());
        velemeny.setFelhasznalo(felhasznalo);
        velemeny.setOrvos(orvos);
        velemeny.setBejegyzesIdo(LocalDateTime.now());
        return velemeny;
    }

    public static VelemenyList convertModelToList(Velemeny velemeny){
        VelemenyList velemenyList = new VelemenyList();
        velemenyList.setVelemenyId(velemeny.getVelemenyId());
        velemenyList.setVelemenyText(velemeny.getVelemenyText());
        velemenyList.setFelhasznalo(FelhasznaloConverter.convertModelToList(velemeny.getFelhasznalo()));
        velemenyList.setOrvos(OrvosConverter.convertModelToList(velemeny.getOrvos()));
        velemenyList.setBejegyzesIdo(velemeny.getBejegyzesIdo());
        return velemenyList;
    }

    public static List<VelemenyList> convertModelsToLists(List<Velemeny> velemenyek){
        List<VelemenyList> velemenyekLista = new ArrayList<>();
        for (Velemeny velemeny : velemenyek) {
            velemenyekLista.add(VelemenyConverter.convertModelToList(velemeny));
        }
        return velemenyekLista;
    }
}
