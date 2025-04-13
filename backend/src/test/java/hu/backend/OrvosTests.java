package hu.backend;

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
import hu.backend.service.OrvosService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class OrvosTests {
    @Autowired
    private OrvosService orvosService;

    @MockitoBean
    private OrvosRepository orvosRepository;

    @MockitoBean
    private SzakteruletRepository szakteruletRepository;

    @MockitoBean
    private KorhazRepository korhazRepository;

    @Test
    void testReadOrvos() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos mockOrvos = new Orvos();
        mockOrvos.setOrvosId(1);
        mockOrvos.setNev("Dr. Gipsz Jakab");
        mockOrvos.setKepNev("1.png");
        mockOrvos.setSzakterulet(szakterulet);
        mockOrvos.setEmail("gipsz.jakab@luxmed.hu");
        mockOrvos.setTelefonszam("+36201234567");
        mockOrvos.setKorhaz(korhaz);

        when(orvosRepository.getReferenceById(1)).thenReturn(mockOrvos);

        OrvosRead result = orvosService.readOrvos(1);

        assertEquals("Dr. Gipsz Jakab", result.getNev());
        assertEquals("1.png", result.getKepNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", result.getEmail());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
    }

    @Test
    void testCreateOrvos() {
        OrvosSave save = new OrvosSave();
        save.setNev("Dr. Gipsz Jakab");
        save.setKepNev("1.png");
        save.setEmail("gipsz.jakab@luxmed.hu");
        save.setTelefonszam("+36201234567");
        save.setSzakteruletId(1);
        save.setKorhazId(1);

        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = OrvosConverter.convertSaveToModel(save, szakterulet, korhaz);

        when(szakteruletRepository.getReferenceById(1)).thenReturn(szakterulet);
        when(korhazRepository.getReferenceById(1)).thenReturn(korhaz);
        when(orvosRepository.save(any(Orvos.class))).thenReturn(orvos);

        OrvosRead result = orvosService.createOrvos(save);

        assertEquals("Dr. Gipsz Jakab", result.getNev());
        assertEquals("1.png", result.getKepNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", result.getEmail());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
    }

    @Test
    void testUpdateOrvos() {
        OrvosSave save = new OrvosSave();
        save.setNev("Dr. Gipsz Jakab");
        save.setKepNev("1.png");
        save.setEmail("gipsz.jakab@luxmed.hu");
        save.setTelefonszam("+36201234567");
        save.setSzakteruletId(1);
        save.setKorhazId(1);

        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos updated = OrvosConverter.convertSaveToModel(1, save, szakterulet, korhaz);

        when(orvosRepository.getReferenceById(1)).thenReturn(new Orvos());
        when(szakteruletRepository.getReferenceById(1)).thenReturn(szakterulet);
        when(korhazRepository.getReferenceById(1)).thenReturn(korhaz);
        when(orvosRepository.save(any(Orvos.class))).thenReturn(updated);

        OrvosRead result = orvosService.updateOrvos(1, save);

        assertEquals("Dr. Gipsz Jakab", result.getNev());
        assertEquals("1.png", result.getKepNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", result.getEmail());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
    }

    @Test
    void testDeleteOrvos() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos mockOrvos = new Orvos();
        mockOrvos.setOrvosId(1);
        mockOrvos.setNev("Dr. Gipsz Jakab");
        mockOrvos.setKepNev("1.png");
        mockOrvos.setSzakterulet(szakterulet);
        mockOrvos.setEmail("gipsz.jakab@luxmed.hu");
        mockOrvos.setTelefonszam("+36201234567");
        mockOrvos.setKorhaz(korhaz);

        when(orvosRepository.getReferenceById(1)).thenReturn(mockOrvos);

        OrvosRead result = orvosService.deleteOrvos(1);

        verify(orvosRepository).deleteById(1);

        assertEquals("Dr. Gipsz Jakab", result.getNev());
        assertEquals("1.png", result.getKepNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", result.getEmail());
        assertEquals("+36201234567", result.getTelefonszam());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
    }

    @Test
    void testReadOrvosList() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setKepNev("1.png");
        orvos.setSzakterulet(szakterulet);
        orvos.setEmail("gipsz.jakab@luxmed.hu");
        orvos.setTelefonszam("+36201234567");
        orvos.setKorhaz(korhaz);

        when(orvosRepository.findAll()).thenReturn(List.of(orvos));

        List<OrvosList> result = orvosService.readOrvosList();

        assertEquals(1, result.size());
        OrvosList o = result.get(0);
        assertEquals("Dr. Gipsz Jakab", o.getNev());
        assertEquals("1.png", o.getKepNev());
        assertEquals("Kardiológia", o.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", o.getEmail());
        assertEquals("+36201234567", o.getTelefonszam());
        assertEquals("LuxMed Kecskemét", o.getKorhaz().getKorhazNev());
    }

    @Test
    void testFilterOrvosByKorhaz() {
        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setKepNev("1.png");
        orvos.setSzakterulet(szakterulet);
        orvos.setEmail("gipsz.jakab@luxmed.hu");
        orvos.setTelefonszam("+36201234567");
        orvos.setKorhaz(korhaz);

        when(orvosRepository.findFilterByKorhaz(1)).thenReturn(List.of(orvos));

        List<OrvosList> result = orvosService.filterOrvosByKorhaz(1);

        assertEquals(1, result.size());
        OrvosList o = result.get(0);
        assertEquals("Dr. Gipsz Jakab", o.getNev());
        assertEquals("1.png", o.getKepNev());
        assertEquals("Kardiológia", o.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", o.getEmail());
        assertEquals("+36201234567", o.getTelefonszam());
        assertEquals("LuxMed Kecskemét", o.getKorhaz().getKorhazNev());
    }

    @Test
    void testFilterOrvosByKorhazAndSzakterulet() {
        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setKepNev("1.png");
        orvos.setSzakterulet(szakterulet);
        orvos.setEmail("gipsz.jakab@luxmed.hu");
        orvos.setTelefonszam("+36201234567");
        orvos.setKorhaz(korhaz);

        when(orvosRepository.findByKorhazAndSzakterulet(1, 1)).thenReturn(List.of(orvos));

        List<OrvosList> result = orvosService.filterOrvosByKorhazAndSzakterulet(1, 1);

        assertEquals(1, result.size());
        OrvosList o = result.get(0);
        assertEquals("Dr. Gipsz Jakab", o.getNev());
        assertEquals("1.png", o.getKepNev());
        assertEquals("Kardiológia", o.getSzakterulet().getSzakteruletNev());
        assertEquals("gipsz.jakab@luxmed.hu", o.getEmail());
        assertEquals("+36201234567", o.getTelefonszam());
        assertEquals("LuxMed Kecskemét", o.getKorhaz().getKorhazNev());
    }
}
