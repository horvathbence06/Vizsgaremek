package hu.backend.service;

import hu.backend.converter.IdopontConverter;
import hu.backend.dto.idopont.IdopontList;
import hu.backend.dto.idopont.IdopontRead;
import hu.backend.dto.idopont.IdopontSave;
import hu.backend.model.*;
import hu.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IdopontService {
    @Autowired
    private IdopontRepository idopontRepository;

    @Autowired
    private OrvosRepository orvosRepository;

    @Autowired
    private KorhazRepository korhazRepository;

    @Autowired
    private SzolgaltatasRepository szolgaltatasRepository;


    public IdopontRead readIdopont(Integer id) {
        Idopont idopont = idopontRepository.getReferenceById(id);
        return IdopontConverter.convertModelToRead(idopont);
    }

    public List<IdopontList> readIdopontList() {
        List<Idopont> idopontList = idopontRepository.findAll();
        return IdopontConverter.convertModelsToLists(idopontList);
    }

    public IdopontRead createIdopont(IdopontSave idopontSave) {
        Orvos orvos = orvosRepository.getReferenceById(idopontSave.getOrvosId());
        Korhaz korhaz = korhazRepository.getReferenceById(idopontSave.getKorhazId());
        Szolgaltatas szolgaltatas = szolgaltatasRepository.getReferenceById(idopontSave.getSzolgaltatasId());
        Idopont idopont = IdopontConverter.convertSaveToModel(idopontSave, orvos, korhaz, szolgaltatas);
        idopontRepository.save(idopont);
        return IdopontConverter.convertModelToRead(idopont);
    }

    public IdopontRead deleteIdopont(Integer id) {
        Idopont idopont = idopontRepository.getReferenceById(id);
        idopontRepository.deleteById(id);
        return IdopontConverter.convertModelToRead(idopont);
    }
}
