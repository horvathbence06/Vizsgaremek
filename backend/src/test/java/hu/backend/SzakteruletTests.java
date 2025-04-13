package hu.backend;

import hu.backend.converter.SzakteruletConverter;
import hu.backend.dto.szakterulet.SzakteruletList;
import hu.backend.dto.szakterulet.SzakteruletRead;
import hu.backend.dto.szakterulet.SzakteruletSave;
import hu.backend.model.Szakterulet;
import hu.backend.repository.SzakteruletRepository;
import hu.backend.service.SzakteruletService;
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
public class SzakteruletTests {
    @Autowired
    private SzakteruletService szakteruletService;

    @MockitoBean
    private SzakteruletRepository szakteruletRepository;

    @Test
    void testReadSzakterulet() {
        Szakterulet mockSzakterulet = new Szakterulet();
        mockSzakterulet.setSzakteruletId(1);
        mockSzakterulet.setSzakteruletNev("Kardiológia");
        when(szakteruletRepository.getReferenceById(1)).thenReturn(mockSzakterulet);
        SzakteruletRead result = szakteruletService.readSzakterulet(1);
        assertEquals("Kardiológia", result.getSzakteruletNev());
    }

    @Test
    void testCreateSzakterulet() {
        SzakteruletSave save = new SzakteruletSave();
        save.setSzakteruletNev("Kardiológia");
        Szakterulet szakterulet = SzakteruletConverter.convertSaveToModel(save);
        when(szakteruletRepository.save(any(Szakterulet.class))).thenReturn(szakterulet);
        SzakteruletRead result = szakteruletService.createSzakterulet(save);
        assertEquals("Kardiológia", result.getSzakteruletNev());
    }

    @Test
    void testDeleteSzakterulet() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");
        when(szakteruletRepository.getReferenceById(1)).thenReturn(szakterulet);
        SzakteruletRead result = szakteruletService.deleteSzakterulet(1);
        verify(szakteruletRepository).deleteById(1);
        assertEquals("Kardiológia", result.getSzakteruletNev());
    }

    @Test
    void testReadSzakteruletList() {
        Szakterulet szakterulet = new Szakterulet();
        szakterulet.setSzakteruletId(1);
        szakterulet.setSzakteruletNev("Kardiológia");
        when(szakteruletRepository.findAll()).thenReturn(List.of(szakterulet));
        List<SzakteruletList> result = szakteruletService.readSzakteruletList();
        assertEquals(1, result.size());
        assertEquals("Kardiológia", result.get(0).getSzakteruletNev());
    }


}
