package hu.backend;

import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.korhaz.KorhazSave;
import hu.backend.model.Korhaz;
import hu.backend.repository.KorhazRepository;
import hu.backend.service.KorhazService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class KorhazTests {
    @Autowired
    private KorhazService korhazService;

    @MockitoBean
    private KorhazRepository korhazRepository;

    @Test
    void testReadKorhaz() {
        Korhaz mockKorhaz = new Korhaz();
        mockKorhaz.setKorhazId(1);
        mockKorhaz.setKorhazNev("LuxMed Balaton");
        mockKorhaz.setKorhazCim("8600 Siófok, Balaton utca 48.");
        mockKorhaz.setKepNev("balaton.png");

        when(korhazRepository.getReferenceById(1)).thenReturn(mockKorhaz);

        KorhazRead result = korhazService.readKorhaz(1);

        assertEquals("LuxMed Balaton", result.getKorhazNev());
        assertEquals("8600 Siófok, Balaton utca 48.", result.getKorhazCim());
        assertEquals("balaton.png", result.getKepNev());
    }

    @Test
    void testCreateKorhaz() {
        KorhazSave input = new KorhazSave();
        input.setKorhazNev("LuxMed Balaton");
        input.setKorhazCim("8600 Siófok, Balaton utca 48.");
        input.setKepNev("balaton.png");

        when(korhazRepository.save(any(Korhaz.class))).thenAnswer(invocation -> invocation.getArgument(0));

        KorhazRead result = korhazService.createKorhaz(input);

        assertEquals("LuxMed Balaton", result.getKorhazNev());
        assertEquals("8600 Siófok, Balaton utca 48.", result.getKorhazCim());
        assertEquals("balaton.png", result.getKepNev());
    }

    @Test
    void testUpdateKorhaz() {
        Korhaz existing = new Korhaz();
        existing.setKorhazId(2);
        existing.setKorhazNev("LuxMed Balaton");
        existing.setKorhazCim("8600 Siófok, Balaton utca 48.");
        existing.setKepNev("balaton.png");

        when(korhazRepository.getReferenceById(2)).thenReturn(existing);
        when(korhazRepository.save(any(Korhaz.class))).thenAnswer(invocation -> invocation.getArgument(0));

        KorhazSave update = new KorhazSave();
        update.setKorhazNev("LuxMed Siófok");
        update.setKorhazCim("8600 Siófok, Tópart sétány 56.");
        update.setKepNev("siofok.png");

        KorhazRead result = korhazService.updateKorhaz(2, update);

        assertEquals("LuxMed Siófok", result.getKorhazNev());
        assertEquals("8600 Siófok, Tópart sétány 56.", result.getKorhazCim());
        assertEquals("siofok.png", result.getKepNev());
    }

    @Test
    void testDeleteKorhaz() {
        Korhaz toDelete = new Korhaz();
        toDelete.setKorhazId(3);
        toDelete.setKorhazNev("LuxMed Balaton");
        toDelete.setKorhazCim("8600 Siófok, Balaton utca 48.");
        toDelete.setKepNev("balaton.png");

        when(korhazRepository.getReferenceById(3)).thenReturn(toDelete);

        KorhazRead result = korhazService.deleteKorhaz(3);

        verify(korhazRepository, times(1)).deleteById(3);
        assertEquals("LuxMed Balaton", result.getKorhazNev());
        assertEquals("8600 Siófok, Balaton utca 48.", result.getKorhazCim());
        assertEquals("balaton.png", result.getKepNev());
    }

    @Test
    void testReadKorhazList() {
        Korhaz k1 = new Korhaz();
        k1.setKorhazId(1);
        k1.setKorhazNev("LuxMed Balaton");
        k1.setKorhazCim("8600 Siófok, Balaton utca 48.");
        k1.setKepNev("balaton.png");

        Korhaz k2 = new Korhaz();
        k2.setKorhazId(2);
        k2.setKorhazNev("LuxMed Kecskemét");
        k2.setKorhazCim("6000 Kecskemét, Kecske utca 6.");
        k2.setKepNev("kecskemet.png");

        List<Korhaz> mockList = List.of(k1, k2);

        when(korhazRepository.findAll()).thenReturn(mockList);

        List<KorhazList> result = korhazService.readKorhazList();

        assertEquals(2, result.size());
        assertEquals("LuxMed Balaton", result.get(0).getKorhazNev());
        assertEquals("8600 Siófok, Balaton utca 48.", result.get(0).getKorhazCim());
        assertEquals("balaton.png", result.get(0).getKepNev());
        assertEquals("LuxMed Kecskemét", result.get(1).getKorhazNev());
        assertEquals("6000 Kecskemét, Kecske utca 6.", result.get(1).getKorhazCim());
        assertEquals("kecskemet.png", result.get(1).getKepNev());
    }
}
