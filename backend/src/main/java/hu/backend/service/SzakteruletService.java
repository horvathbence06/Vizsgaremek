package hu.backend.service;

import hu.backend.converter.SzakteruletConverter;
import hu.backend.dto.szakterulet.SzakteruletList;
import hu.backend.dto.szakterulet.SzakteruletRead;
import hu.backend.dto.szakterulet.SzakteruletSave;
import hu.backend.model.Szakterulet;
import hu.backend.repository.SzakteruletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SzakteruletService {
    @Autowired
    private SzakteruletRepository szakteruletRepository;


    public SzakteruletRead readSzakterulet(Integer id) {
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(id);
        return SzakteruletConverter.convertModelToRead(szakterulet);
    }

    public List<SzakteruletList> readSzakteruletList() {
        List<Szakterulet> szakteruletek = szakteruletRepository.findAll();
        return SzakteruletConverter.convertModelsToLists(szakteruletek);
    }

    public SzakteruletRead createSzakterulet(SzakteruletSave szakteruletSave) {
        Szakterulet szakterulet = SzakteruletConverter.convertSaveToModel(szakteruletSave);
        szakteruletRepository.save(szakterulet);
        return SzakteruletConverter.convertModelToRead(szakterulet);
    }

    public SzakteruletRead deleteSzakterulet(Integer id) {
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(id);
        szakteruletRepository.deleteById(id);
        return SzakteruletConverter.convertModelToRead(szakterulet);
    }
}
