package hu.backend.service;

import hu.backend.converter.OrvosConverter;
import hu.backend.converter.VelemenyConverter;
import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.velemeny.VelemenyList;
import hu.backend.dto.velemeny.VelemenyRead;
import hu.backend.dto.velemeny.VelemenySave;
import hu.backend.model.Felhasznalo;
import hu.backend.model.Orvos;
import hu.backend.model.Velemeny;
import hu.backend.repository.FelhasznaloRepository;
import hu.backend.repository.OrvosRepository;
import hu.backend.repository.VelemenyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class VelemenyService {
    @Autowired
    private VelemenyRepository velemenyRepository;

    @Autowired
    private FelhasznaloRepository felhasznaloRepository;

    @Autowired
    private OrvosRepository orvosRepository;


    public List<VelemenyList> readVelemenyList() {
        List<Velemeny> velemenyek = velemenyRepository.findAll();
        return VelemenyConverter.convertModelsToLists(velemenyek);
    }

    public VelemenyRead createVelemeny(VelemenySave velemenySave) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(velemenySave.getFelhasznaloId());
        Orvos orvos = orvosRepository.getReferenceById(velemenySave.getOrvosId());
        Velemeny velemeny = VelemenyConverter.convertSaveToModel(velemenySave, felhasznalo, orvos);
        velemenyRepository.save(velemeny);
        return VelemenyConverter.convertModelToRead(velemeny);
    }

    public VelemenyRead updateVelemeny(Integer id, VelemenySave velemenySave) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(velemenySave.getFelhasznaloId());
        Orvos orvos = orvosRepository.getReferenceById(velemenySave.getOrvosId());
        Velemeny velemeny = velemenyRepository.getReferenceById(id);
        velemeny.setVelemenyId(id);
        velemeny.setVelemenyText(velemenySave.getVelemenyText());
        velemeny.setFelhasznalo(felhasznalo);
        velemeny.setOrvos(orvos);
        velemeny.setBejegyzesIdo(LocalDateTime.now());
        velemenyRepository.save(velemeny);
        return VelemenyConverter.convertModelToRead(velemeny);
    }

    public VelemenyRead deleteVelemeny(Integer id) {
        Velemeny velemeny = velemenyRepository.getReferenceById(id);
        velemenyRepository.deleteById(id);
        return VelemenyConverter.convertModelToRead(velemeny);
    }

    public List<VelemenyList> filterVelemenyByOrvos(Integer orvosId) {
        List<Velemeny> velemenyek;
        if (orvosId != null) {
            velemenyek = velemenyRepository.findFilterByOrvos(orvosId);
        } else {
            velemenyek = velemenyRepository.findAll();
        }
        return VelemenyConverter.convertModelsToLists(velemenyek);
    }
}
