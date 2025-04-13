package hu.backend;

import hu.backend.converter.SzolgaltatasConverter;
import hu.backend.dto.szolgaltatas.SzolgaltatasList;
import hu.backend.dto.szolgaltatas.SzolgaltatasRead;
import hu.backend.dto.szolgaltatas.SzolgaltatasSave;
import hu.backend.model.Szakterulet;
import hu.backend.model.Szolgaltatas;
import hu.backend.repository.SzakteruletRepository;
import hu.backend.repository.SzolgaltatasRepository;
import hu.backend.service.SzolgaltatasService;
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
public class SzolgaltatasTests {
    @Autowired
    private SzolgaltatasService szolgaltatasService;

    @MockitoBean
    private SzolgaltatasRepository szolgaltatasRepository;

    @MockitoBean
    private SzakteruletRepository szakteruletRepository;

    @Test
    void testReadSzolgaltatas() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Szolgaltatas mockSzolgaltatas = new Szolgaltatas();
        mockSzolgaltatas.setSzolgaltatasId(1);
        mockSzolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        mockSzolgaltatas.setSzakterulet(szakterulet);
        mockSzolgaltatas.setAr(30000);

        when(szolgaltatasRepository.getReferenceById(1)).thenReturn(mockSzolgaltatas);

        SzolgaltatasRead result = szolgaltatasService.readSzolgaltatas(1);

        assertEquals("Kardiológiai műtét", result.getSzolgaltatasNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals(30000, result.getAr());
    }

    @Test
    void testCreateSzolgaltatas() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        SzolgaltatasSave save = new SzolgaltatasSave();
        save.setSzolgaltatasNev("Kardiológiai műtét");
        save.setSzakteruletId(1);
        save.setAr(30000);

        Szolgaltatas szolgaltatas = SzolgaltatasConverter.convertSaveToModel(save, szakterulet);

        when(szakteruletRepository.getReferenceById(1)).thenReturn(szakterulet);
        when(szolgaltatasRepository.save(any(Szolgaltatas.class))).thenReturn(szolgaltatas);

        SzolgaltatasRead result = szolgaltatasService.createSzolgaltatas(save);

        assertEquals("Kardiológiai műtét", result.getSzolgaltatasNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals(30000, result.getAr());
    }

    @Test
    void testUpdateSzolgaltatas() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        SzolgaltatasSave save = new SzolgaltatasSave();
        save.setSzolgaltatasNev("Kardiológiai műtét");
        save.setSzakteruletId(1);
        save.setAr(30000);

        Szolgaltatas szolgaltatas = SzolgaltatasConverter.convertSaveToModel(1, save, szakterulet);

        when(szakteruletRepository.getReferenceById(1)).thenReturn(szakterulet);
        when(szolgaltatasRepository.save(any(Szolgaltatas.class))).thenReturn(szolgaltatas);

        SzolgaltatasRead result = szolgaltatasService.updateSzolgaltatas(1, save);

        assertEquals("Kardiológiai műtét", result.getSzolgaltatasNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals(30000, result.getAr());
    }

    @Test
    void testDeleteSzolgaltatas() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);
        szolgaltatas.setAr(30000);

        when(szolgaltatasRepository.getReferenceById(1)).thenReturn(szolgaltatas);

        SzolgaltatasRead result = szolgaltatasService.deleteSzolgaltatas(1);

        verify(szolgaltatasRepository).deleteById(1);

        assertEquals("Kardiológiai műtét", result.getSzolgaltatasNev());
        assertEquals("Kardiológia", result.getSzakterulet().getSzakteruletNev());
        assertEquals(30000, result.getAr());
    }

    @Test
    void testReadSzolgaltatasList() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");

        Szolgaltatas szolgaltatas = new Szolgaltatas();
        szolgaltatas.setSzolgaltatasId(1);
        szolgaltatas.setSzolgaltatasNev("Kardiológiai műtét");
        szolgaltatas.setSzakterulet(szakterulet);
        szolgaltatas.setAr(30000);

        when(szolgaltatasRepository.findAll()).thenReturn(List.of(szolgaltatas));

        List<SzolgaltatasList> result = szolgaltatasService.readSzolgaltatasList();

        assertEquals(1, result.size());
        SzolgaltatasList s = result.get(0);
        assertEquals("Kardiológiai műtét", s.getSzolgaltatasNev());
        assertEquals("Kardiológia", s.getSzakterulet().getSzakteruletNev());
        assertEquals(30000, s.getAr());
    }

}
