package hu.backend;

import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.model.Felhasznalo;
import hu.backend.repository.FelhasznaloRepository;
import hu.backend.service.FelhasznaloService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class FelhasznaloTests {
    @Autowired
    private FelhasznaloService felhasznaloService;

    @MockitoBean
    private FelhasznaloRepository felhasznaloRepository;

    @MockitoBean
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Test
    void testReadFelhasznalo() {
        Felhasznalo mockFelhasznalo = new Felhasznalo();
        mockFelhasznalo.setFelhasznaloId(1);
        mockFelhasznalo.setFelhasznaloNev("administrator");
        mockFelhasznalo.setJelszo("jelszo123");
        mockFelhasznalo.setTeljesNev("Teszt Adminisztrátor");
        mockFelhasznalo.setTelefonszam("+36201234567");
        mockFelhasznalo.setEmailCim("admin@luxmed.hu");

        when(felhasznaloRepository.getReferenceById(1)).thenReturn(mockFelhasznalo);

        FelhasznaloRead result = felhasznaloService.readFelhasznalo(1);

        assertEquals("administrator", result.getFelhasznaloNev());
        assertEquals("jelszo123", result.getJelszo());
        assertEquals("Teszt Adminisztrátor", result.getTeljesNev());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("admin@luxmed.hu", result.getEmailCim());
    }

    @Test
    void testCreateFelhasznalo() {
        FelhasznaloSave saveDto = new FelhasznaloSave();
        saveDto.setFelhasznaloNev("administrator");
        saveDto.setJelszo("jelszo123");
        saveDto.setTeljesNev("Teszt Adminisztrátor");
        saveDto.setTelefonszam("+36201234567");
        saveDto.setEmailCim("admin@luxmed.hu");

        Felhasznalo savedFelhasznalo = new Felhasznalo();
        savedFelhasznalo.setFelhasznaloId(1);
        savedFelhasznalo.setFelhasznaloNev("administrator");
        savedFelhasznalo.setJelszo("ENCODED_PASSWORD");
        savedFelhasznalo.setTeljesNev("Teszt Adminisztrátor");
        savedFelhasznalo.setTelefonszam("+36201234567");
        savedFelhasznalo.setEmailCim("admin@luxmed.hu");

        when(felhasznaloRepository.save(any())).thenReturn(savedFelhasznalo);
        when(passwordEncoder.encode("jelszo123")).thenReturn("ENCODED_PASSWORD");

        FelhasznaloRead result = felhasznaloService.createFelhasznalo(saveDto);

        assertEquals("administrator", result.getFelhasznaloNev());
        assertEquals("ENCODED_PASSWORD", result.getJelszo());
        assertEquals("Teszt Adminisztrátor", result.getTeljesNev());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("admin@luxmed.hu", result.getEmailCim());
    }

    @Test
    void testUpdateFelhasznalo() {
        Felhasznalo existing = new Felhasznalo();
        existing.setFelhasznaloId(1);
        existing.setFelhasznaloNev("oldnev");
        existing.setJelszo("oldjelszo");
        existing.setTeljesNev("Régi Név");
        existing.setTelefonszam("+3612345678");
        existing.setEmailCim("regi@email.hu");

        FelhasznaloSave updateDto = new FelhasznaloSave();
        updateDto.setFelhasznaloNev("administrator");
        updateDto.setJelszo("jelszo123");
        updateDto.setTeljesNev("Teszt Adminisztrátor");
        updateDto.setTelefonszam("+36201234567");
        updateDto.setEmailCim("admin@luxmed.hu");

        when(felhasznaloRepository.getReferenceById(1)).thenReturn(existing);
        when(passwordEncoder.encode("jelszo123")).thenReturn("ENCODED_PASSWORD");
        when(felhasznaloRepository.save(any())).thenReturn(existing);

        FelhasznaloRead result = felhasznaloService.updateFelhasznalo(1, updateDto);

        assertEquals("administrator", result.getFelhasznaloNev());
        assertEquals("ENCODED_PASSWORD", result.getJelszo());
        assertEquals("Teszt Adminisztrátor", result.getTeljesNev());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("admin@luxmed.hu", result.getEmailCim());
    }

    @Test
    void testDeleteFelhasznalo() {
        Felhasznalo mockFelhasznalo = new Felhasznalo();
        mockFelhasznalo.setFelhasznaloId(1);
        mockFelhasznalo.setFelhasznaloNev("administrator");
        mockFelhasznalo.setJelszo("jelszo123");
        mockFelhasznalo.setTeljesNev("Teszt Adminisztrátor");
        mockFelhasznalo.setTelefonszam("+36201234567");
        mockFelhasznalo.setEmailCim("admin@luxmed.hu");

        when(felhasznaloRepository.getReferenceById(1)).thenReturn(mockFelhasznalo);

        FelhasznaloRead result = felhasznaloService.deleteFelhasznalo(1);

        verify(felhasznaloRepository).deleteById(1);

        assertEquals("administrator", result.getFelhasznaloNev());
        assertEquals("jelszo123", result.getJelszo());
        assertEquals("Teszt Adminisztrátor", result.getTeljesNev());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("admin@luxmed.hu", result.getEmailCim());
    }

    @Test
    void testLoginFindUserByFelhasznaloNev() {
        Felhasznalo mockFelhasznalo = new Felhasznalo();
        mockFelhasznalo.setFelhasznaloId(1);
        mockFelhasznalo.setFelhasznaloNev("administrator");
        mockFelhasznalo.setJelszo("jelszo123");
        mockFelhasznalo.setTeljesNev("Teszt Adminisztrátor");
        mockFelhasznalo.setTelefonszam("+36201234567");
        mockFelhasznalo.setEmailCim("admin@luxmed.hu");

        when(felhasznaloRepository.findUserByFelhasznaloNev("administrator")).thenReturn(mockFelhasznalo);

        Felhasznalo result = felhasznaloService.findUserByFelhasznaloNev("administrator");

        assertEquals("administrator", result.getFelhasznaloNev());
        assertEquals("jelszo123", result.getJelszo());
        assertEquals("Teszt Adminisztrátor", result.getTeljesNev());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("admin@luxmed.hu", result.getEmailCim());
    }

}
