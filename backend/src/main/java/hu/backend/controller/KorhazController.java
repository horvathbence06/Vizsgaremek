package hu.backend.controller;

import hu.backend.dto.korhaz.KorhazList;
import hu.backend.dto.korhaz.KorhazRead;
import hu.backend.dto.korhaz.KorhazSave;
import hu.backend.service.KorhazService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("korhaz")
@Tag(name = "Kórházak kezelése", description = "Kórházakhoz kapcsolódó funkciócsomag")
@CrossOrigin(origins = "http://localhost:3000")
public class KorhazController {
    @Autowired
    private KorhazService korhazService;

    @GetMapping("/{id}")
    @Operation(description = "Kórház kiválasztása azonosító alapján")
    public KorhazRead readKorhaz(@PathVariable Integer id){
        return korhazService.readKorhaz(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden kórház listázása")
    public List<KorhazList> readKorhazList(){
        return korhazService.readKorhazList();
    }

    @PostMapping("")
    @Operation(description = "Új kórház bejegyzése")
    public KorhazRead createKorhaz(@RequestBody KorhazSave korhazSave){
        return korhazService.createKorhaz(korhazSave);
    }

    @PutMapping("/{id}")
    @Operation(description = "Kórház adatainak megváltoztatása")
    public KorhazRead updateKorhaz(@PathVariable Integer id, @RequestBody KorhazSave korhazSave){
        return korhazService.updateKorhaz(id, korhazSave);
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Kórház törlése a rendszerből")
    public KorhazRead deleteKorhaz(@PathVariable Integer id){
        return korhazService.deleteKorhaz(id);
    }

}
