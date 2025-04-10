package hu.backend.controller;

import hu.backend.dto.szakterulet.SzakteruletList;
import hu.backend.dto.szakterulet.SzakteruletRead;
import hu.backend.dto.szakterulet.SzakteruletSave;
import hu.backend.service.SzakteruletService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("szakterulet")
@Tag(name = "Szakterületek kezelése", description = "Szakterületekhez kapcsolódó funkciócsomag")
@CrossOrigin(origins = "http://localhost:3000")
public class SzakteruletController {
    @Autowired
    private SzakteruletService szakteruletService;

    @GetMapping("/{id}")
    @Operation(description = "Szakterület kiválasztása azonosító alapján")
    public SzakteruletRead readSzakterulet(@PathVariable Integer id){
        return szakteruletService.readSzakterulet(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden szakterület listázása")
    public List<SzakteruletList> readSzakteruletList(){
        return szakteruletService.readSzakteruletList();
    }

    @PreAuthorize("hasAuthority('CREATE_SZAKTERULET')")
    @PostMapping("")
    @Operation(description = "Új szakterület bejegyzése")
    public SzakteruletRead createSzakterulet(@RequestBody SzakteruletSave szakteruletSave){
        return szakteruletService.createSzakterulet(szakteruletSave);
    }

    @PreAuthorize("hasAuthority('DELETE_SZAKTERULET')")
    @DeleteMapping("/{id}")
    @Operation(description = "Szakterület törlése a rendszerből")
    public SzakteruletRead deleteSzakterulet(@PathVariable Integer id){
        return szakteruletService.deleteSzakterulet(id);
    }
}
