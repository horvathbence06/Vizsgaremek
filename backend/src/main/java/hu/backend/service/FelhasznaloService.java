package hu.backend.service;

import hu.backend.converter.FelhasznaloConverter;
import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.model.Felhasznalo;
import hu.backend.repository.FelhasznaloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FelhasznaloService {
    @Autowired
    private FelhasznaloRepository felhasznaloRepository;


    public FelhasznaloRead readFelhasznalo(Integer id) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(id);
        return FelhasznaloConverter.convertModelToRead(felhasznalo);
    }

    public List<FelhasznaloList> readFelhasznaloList() {
        List<Felhasznalo> felhasznalok = felhasznaloRepository.findAll();
        return FelhasznaloConverter.convertModelsToLists(felhasznalok);
    }

    public FelhasznaloRead createFelhasznalo(FelhasznaloSave felhasznaloSave) {
        Felhasznalo felhasznalo = FelhasznaloConverter.convertSaveToModel(felhasznaloSave);
        felhasznaloRepository.save(felhasznalo);
        return FelhasznaloConverter.convertModelToRead(felhasznalo);
    }

    public FelhasznaloRead updateFelhasznalo(Integer id, FelhasznaloSave felhasznaloSave) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(id);
        felhasznalo.setFelhasznaloNev(felhasznaloSave.getFelhasznaloNev());
        felhasznalo.setJelszo(felhasznaloSave.getJelszo());
        felhasznalo.setTeljesNev(felhasznaloSave.getTeljesNev());
        felhasznalo.setTelefonszam(felhasznaloSave.getTelefonszam());
        felhasznalo.setEmailCim(felhasznaloSave.getEmailCim());
        felhasznaloRepository.save(felhasznalo);
        return FelhasznaloConverter.convertModelToRead(felhasznalo);
    }

    public FelhasznaloRead deleteFelhasznalo(Integer id) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(id);
        felhasznaloRepository.deleteById(id);
        return FelhasznaloConverter.convertModelToRead(felhasznalo);
    }
}
