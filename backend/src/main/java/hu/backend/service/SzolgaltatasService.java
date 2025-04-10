package hu.backend.service;

import hu.backend.converter.SzolgaltatasConverter;
import hu.backend.dto.szolgaltatas.SzolgaltatasList;
import hu.backend.dto.szolgaltatas.SzolgaltatasRead;
import hu.backend.dto.szolgaltatas.SzolgaltatasSave;
import hu.backend.model.Szakterulet;
import hu.backend.model.Szolgaltatas;
import hu.backend.repository.SzakteruletRepository;
import hu.backend.repository.SzolgaltatasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SzolgaltatasService {
    @Autowired
    private SzolgaltatasRepository szolgaltatasRepository;

    @Autowired
    private SzakteruletRepository szakteruletRepository;


    public SzolgaltatasRead readSzolgaltatas(Integer id) {
        Szolgaltatas szolgaltatas = szolgaltatasRepository.getReferenceById(id);
        return SzolgaltatasConverter.convertModelToRead(szolgaltatas);
    }

    public List<SzolgaltatasList> readSzolgaltatasList() {
        List<Szolgaltatas> szolgaltatasok = szolgaltatasRepository.findAll();
        return SzolgaltatasConverter.convertModelsToLists(szolgaltatasok);
    }

    public SzolgaltatasRead createSzolgaltatas(SzolgaltatasSave szolgaltatasSave) {
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(szolgaltatasSave.getSzakteruletId());
        Szolgaltatas szolgaltatas = SzolgaltatasConverter.convertSaveToModel(szolgaltatasSave, szakterulet);
        szolgaltatasRepository.save(szolgaltatas);
        return SzolgaltatasConverter.convertModelToRead(szolgaltatas);
    }

    public SzolgaltatasRead updateSzolgaltatas(Integer id, SzolgaltatasSave szolgaltatasSave) {
        Szakterulet szakterulet = szakteruletRepository.getReferenceById(szolgaltatasSave.getSzakteruletId());
        Szolgaltatas szolgaltatas = szolgaltatasRepository.save(SzolgaltatasConverter.convertSaveToModel(id, szolgaltatasSave, szakterulet));
        return SzolgaltatasConverter.convertModelToRead(szolgaltatas);
    }

    public SzolgaltatasRead deleteSzolgaltatas(Integer id) {
        Szolgaltatas szolgaltatas = szolgaltatasRepository.getReferenceById(id);
        szolgaltatasRepository.deleteById(id);
        return SzolgaltatasConverter.convertModelToRead(szolgaltatas);
    }
}
