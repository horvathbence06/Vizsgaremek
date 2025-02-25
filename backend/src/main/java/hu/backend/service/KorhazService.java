package hu.backend.service;

import hu.backend.converter.KorhazConverter;
import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.korhaz.KorhazSave;
import hu.backend.model.Korhaz;
import hu.backend.repository.KorhazRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorhazService {
    @Autowired
    private KorhazRepository korhazRepository;


    public KorhazRead readKorhaz(Integer id) {
        Korhaz korhaz = korhazRepository.getReferenceById(id);
        return KorhazConverter.convertModelToRead(korhaz);
    }

    public List<KorhazList> readKorhazList() {
        List<Korhaz> korhazList = korhazRepository.findAll();
        return KorhazConverter.convertModelsToLists(korhazList);
    }

    public KorhazRead createKorhaz(KorhazSave korhazSave) {
        Korhaz korhaz = KorhazConverter.convertSaveToModel(korhazSave);
        korhazRepository.save(korhaz);
        return KorhazConverter.convertModelToRead(korhaz);
    }

    public KorhazRead updateKorhaz(Integer id, KorhazSave korhazSave) {
        Korhaz korhaz = korhazRepository.getReferenceById(id);
        korhaz.setKorhazNev(korhazSave.getKorhazNev());
        korhaz.setKepNev(korhazSave.getKepNev());
        korhaz.setKorhazCim(korhazSave.getKorhazCim());
        korhazRepository.save(korhaz);
        return KorhazConverter.convertModelToRead(korhaz);
    }

    public KorhazRead deleteKorhaz(Integer id) {
        Korhaz korhaz = korhazRepository.getReferenceById(id);
        korhazRepository.deleteById(id);
        return KorhazConverter.convertModelToRead(korhaz);
    }
}
