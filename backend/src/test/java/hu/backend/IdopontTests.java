package hu.backend;

import hu.backend.converter.IdopontConverter;
import hu.backend.dto.idopont.IdopontList;
import hu.backend.dto.idopont.IdopontRead;
import hu.backend.dto.idopont.IdopontSave;
import hu.backend.model.*;
import hu.backend.repository.IdopontRepository;
import hu.backend.repository.KorhazRepository;
import hu.backend.repository.OrvosRepository;
import hu.backend.repository.SzolgaltatasRepository;
import hu.backend.service.IdopontService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class IdopontTests {
    @Autowired
    private IdopontService idopontService;

    @MockitoBean
    private IdopontRepository idopontRepository;

    @MockitoBean
    private OrvosRepository orvosRepository;

    @MockitoBean
    private KorhazRepository korhazRepository;

    @MockitoBean
    private SzolgaltatasRepository szolgaltatasRepository;

    @Test
    void testReadIdopont() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setSzakterulet(szakterulet);
        orvos.setKorhaz(korhaz);

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);

        Idopont mockIdopont = new Idopont();
        mockIdopont.setIdopontId(1);
        mockIdopont.setIdo(LocalDateTime.of(LocalDate.of(2025, 5, 27), LocalTime.of(16, 0, 0)));
        mockIdopont.setFoglaloNeve("Teszt László");
        mockIdopont.setFoglaloTelefonszama("+36201234567");
        mockIdopont.setFoglaloEmailCim("teszt.laszlo@gmail.com");
        mockIdopont.setOrvos(orvos);
        mockIdopont.setKorhaz(korhaz);
        mockIdopont.setSzolgaltatas(szolgaltatas);

        when(idopontRepository.getReferenceById(1)).thenReturn(mockIdopont);

        IdopontRead result = idopontService.readIdopont(1);

        assertEquals(LocalDateTime.of(LocalDate.of(2025, 5, 27), LocalTime.of(16, 0, 0)), result.getIdo());
        assertEquals("Teszt László", result.getFoglaloNeve());
        assertEquals("+36201234567", result.getFoglaloTelefonszama());
        assertEquals("teszt.laszlo@gmail.com", result.getFoglaloEmailCim());
        assertEquals("Dr. Gipsz Jakab", result.getOrvos().getNev());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
        assertEquals("Kardiológiai műtét", result.getSzolgaltatas().getSzolgaltatasNev());
    }

    @Test
    void testCreateIdopont() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setSzakterulet(szakterulet);
        orvos.setKorhaz(korhaz);

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);

        IdopontSave saveDto = new IdopontSave();
        saveDto.setIdo(LocalDateTime.of(2025, 5, 27, 16, 0));
        saveDto.setFoglaloNeve("Teszt László");
        saveDto.setFoglaloTelefonszama("+36201234567");
        saveDto.setFoglaloEmailCim("teszt.laszlo@gmail.com");
        saveDto.setOrvosId(1);
        saveDto.setKorhazId(1);
        saveDto.setSzolgaltatasId(1);

        when(orvosRepository.getReferenceById(1)).thenReturn(orvos);
        when(korhazRepository.getReferenceById(1)).thenReturn(korhaz);
        when(szolgaltatasRepository.getReferenceById(1)).thenReturn(szolgaltatas);

        Idopont savedIdopont = IdopontConverter.convertSaveToModel(saveDto, orvos, korhaz, szolgaltatas);
        when(idopontRepository.save(any(Idopont.class))).thenReturn(savedIdopont);

        IdopontRead result = idopontService.createIdopont(saveDto);

        assertEquals(LocalDateTime.of(2025, 5, 27, 16, 0), result.getIdo());
        assertEquals("Teszt László", result.getFoglaloNeve());
        assertEquals("+36201234567", result.getFoglaloTelefonszama());
        assertEquals("teszt.laszlo@gmail.com", result.getFoglaloEmailCim());
        assertEquals("Dr. Gipsz Jakab", result.getOrvos().getNev());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
        assertEquals("Kardiológiai műtét", result.getSzolgaltatas().getSzolgaltatasNev());
    }

    @Test
    void testDeleteIdopont() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setSzakterulet(szakterulet);
        orvos.setKorhaz(korhaz);

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);

        Idopont idopont = new Idopont();
        idopont.setIdopontId(1);
        idopont.setIdo(LocalDateTime.of(2025, 5, 27, 16, 0));
        idopont.setFoglaloNeve("Teszt László");
        idopont.setFoglaloTelefonszama("+36201234567");
        idopont.setFoglaloEmailCim("teszt.laszlo@gmail.com");
        idopont.setOrvos(orvos);
        idopont.setKorhaz(korhaz);
        idopont.setSzolgaltatas(szolgaltatas);

        when(idopontRepository.getReferenceById(1)).thenReturn(idopont);

        IdopontRead result = idopontService.deleteIdopont(1);

        verify(idopontRepository).deleteById(1);
        assertEquals(LocalDateTime.of(2025, 5, 27, 16, 0), result.getIdo());
        assertEquals("Teszt László", result.getFoglaloNeve());
        assertEquals("+36201234567", result.getFoglaloTelefonszama());
        assertEquals("teszt.laszlo@gmail.com", result.getFoglaloEmailCim());
        assertEquals("Dr. Gipsz Jakab", result.getOrvos().getNev());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
        assertEquals("Kardiológiai műtét", result.getSzolgaltatas().getSzolgaltatasNev());
    }

    @Test
    void testReadIdopontList() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Korhaz korhaz = new Korhaz();
        korhaz.setKorhazId(1);
        korhaz.setKorhazNev("LuxMed Kecskemét");

        Orvos orvos = new Orvos();
        orvos.setOrvosId(1);
        orvos.setNev("Dr. Gipsz Jakab");
        orvos.setSzakterulet(szakterulet);
        orvos.setKorhaz(korhaz);

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);

        Idopont idopont = new Idopont();
        idopont.setIdopontId(1);
        idopont.setIdo(LocalDateTime.of(2025, 5, 27, 16, 0));
        idopont.setFoglaloNeve("Teszt László");
        idopont.setFoglaloTelefonszama("+36201234567");
        idopont.setFoglaloEmailCim("teszt.laszlo@gmail.com");
        idopont.setOrvos(orvos);
        idopont.setKorhaz(korhaz);
        idopont.setSzolgaltatas(szolgaltatas);

        when(idopontRepository.findAll()).thenReturn(List.of(idopont));

        List<IdopontList> resultList = idopontService.readIdopontList();
        IdopontList result = resultList.get(0);

        assertEquals(1, resultList.size());
        assertEquals(1, result.getIdopontId());
        assertEquals(LocalDateTime.of(2025, 5, 27, 16, 0), result.getIdo());
        assertEquals("Teszt László", result.getFoglaloNeve());
        assertEquals("+36201234567", result.getFoglaloTelefonszama());
        assertEquals("teszt.laszlo@gmail.com", result.getFoglaloEmailCim());
        assertEquals("Dr. Gipsz Jakab", result.getOrvos().getNev());
        assertEquals("LuxMed Kecskemét", result.getKorhaz().getKorhazNev());
        assertEquals("Kardiológiai műtét", result.getSzolgaltatas().getSzolgaltatasNev());
    }

}
