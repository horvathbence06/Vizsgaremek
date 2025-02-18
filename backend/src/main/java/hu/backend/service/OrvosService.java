package hu.backend.service;

import hu.backend.converter.OrvosConverter;
import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.orvos.OrvosSave;
import hu.backend.model.Korhaz;
import hu.backend.model.Orvos;
import hu.backend.model.Szakterulet;
import hu.backend.repository.KorhazRepository;
import hu.backend.repository.OrvosRepository;
import hu.backend.repository.SzakteruletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrvosService {
    @Autowired
    private OrvosRepository orvosRepository;

    @Autowired
    private SzakteruletRepository szakteruletRepository;

    @Autowired
    private KorhazRepository korhazRepository;


    public OrvosRead readOrvos(Integer id) {
        Orvos orvos = orvosRepository.getReferenceById(id);
        return OrvosConverter.convertModelToRead(orvos);
    }

    public List<OrvosList> readOrvosList() {
        List<Orvos> orvosok = orvosRepository.findAll();
        return OrvosConverter.convertModelsToLists(orvosok);
    }

    public OrvosRead createOrvos(OrvosSave orvosSave) {
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(orvosSave.getSzakteruletId());
        Korhaz korhaz = korhazRepository.getReferenceById(orvosSave.getKorhazId());
        Orvos orvos = OrvosConverter.convertSaveToModel(orvosSave, szakterulet, korhaz);
        orvosRepository.save(orvos);
        return OrvosConverter.convertModelToRead(orvos);
    }

    public OrvosRead updateOrvos(Integer id, OrvosSave orvosSave) {
        Orvos orvos = orvosRepository.getReferenceById(id);
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(orvosSave.getSzakteruletId());
        Korhaz korhaz = korhazRepository.getReferenceById(orvosSave.getKorhazId());
        orvos = OrvosConverter.convertSaveToModel(id, orvosSave, szakterulet, korhaz);
        orvosRepository.save(orvos);
        return OrvosConverter.convertModelToRead(orvos);
    }

    public OrvosRead deleteOrvos(Integer id) {
        Orvos orvos = orvosRepository.getReferenceById(id);
        orvosRepository.deleteById(id);
        return OrvosConverter.convertModelToRead(orvos);
    }
}
