package hu.backend.service;

import hu.backend.auth.PermissionCollector;
import hu.backend.converter.FelhasznaloConverter;
import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.exception.FelhasznaloNotFoundException;
import hu.backend.model.Felhasznalo;
import hu.backend.repository.FelhasznaloRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@Qualifier("userDetailsService")
public class FelhasznaloService implements UserDetailsService {
    @Autowired
    private FelhasznaloRepository felhasznaloRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private static final String NO_USER_FOUND_BY_USERNAME = "Ezen a néven felhasználó nem található.";

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
        felhasznalo.setJelszo(passwordEncoder.encode(felhasznaloSave.getJelszo()));
        felhasznaloRepository.save(felhasznalo);
        return FelhasznaloConverter.convertModelToRead(felhasznalo);
    }

    public FelhasznaloRead updateFelhasznalo(Integer id, FelhasznaloSave felhasznaloSave) {
        Felhasznalo felhasznalo = felhasznaloRepository.getReferenceById(id);
        felhasznalo.setFelhasznaloNev(felhasznaloSave.getFelhasznaloNev());
        felhasznalo.setJelszo(passwordEncoder.encode(felhasznaloSave.getJelszo()));
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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Felhasznalo felhasznalo = felhasznaloRepository.findUserByFelhasznaloNev(username);
        if (felhasznalo == null) {
            throw new FelhasznaloNotFoundException(NO_USER_FOUND_BY_USERNAME + username);
        } else {
            return new PermissionCollector(felhasznalo);
        }
    }

    public Felhasznalo findUserByFelhasznaloNev(String username) {
        return felhasznaloRepository.findUserByFelhasznaloNev(username);
    }


    public List<String> findPermissionsByUser(Integer userId) {
        return felhasznaloRepository.findPermissionsByUser(userId);
    }
}
