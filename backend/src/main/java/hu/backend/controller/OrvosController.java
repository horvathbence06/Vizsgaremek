package hu.backend.controller;

import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.orvos.OrvosSave;
import hu.backend.service.OrvosService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orvos")
@Tag(name = "Orvosok kezelése", description = "Orvosokhoz kapcsolódó funkciócsomagok")
@CrossOrigin(origins = "http://localhost:3000")
public class OrvosController {
    @Autowired
    private OrvosService orvosService;

    @GetMapping("/{id}")
    @Operation(description = "Orvos kiválasztása azonosító alapján")
    public OrvosRead readOrvos(@PathVariable Integer id){
        return orvosService.readOrvos(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden orvos listázása")
    public List<OrvosList> readOrvosList(){
        return orvosService.readOrvosList();
    }

    @PreAuthorize("hasAuthority('CREATE_ORVOS')")
    @PostMapping("")
    @Operation(description = "Új orvos bejegyzése")
    public OrvosRead createOrvos(@RequestBody OrvosSave orvosSave){
        return orvosService.createOrvos(orvosSave);
    }

    @PreAuthorize("hasAuthority('UPDATE_ORVOS')")
    @PutMapping("/{id}")
    @Operation(description = "Orvos adatainak megváltoztatása")
    public OrvosRead updateOrvos(@PathVariable Integer id, @RequestBody OrvosSave orvosSave){
        return orvosService.updateOrvos(id, orvosSave);
    }

    @PreAuthorize("hasAuthority('DELETE_ORVOS')")
    @DeleteMapping("/{id}")
    @Operation(description = "Orvos törlése a rendszerből")
    public OrvosRead deleteOrvos(@PathVariable Integer id){
        return orvosService.deleteOrvos(id);
    }

    @GetMapping("/filter/by-korhaz")
    @Operation(description = "Adott kórházhoz tartozó orvosok listázása")
    public List<OrvosList> filterOrvosByKorhaz(@RequestParam Integer korhazId){
        return orvosService.filterOrvosByKorhaz(korhazId);
    }

    @GetMapping("/filter/by-korhaz-and-szakterulet")
    @Operation(description = "Adott kórházhoz tartozó, adott szakterületű orvosok listázása")
    public List<OrvosList> filterOrvosByKorhazAndSzakterulet(@RequestParam Integer korhazId, @RequestParam Integer szakteruletId){
        return orvosService.filterOrvosByKorhazAndSzakterulet(korhazId, szakteruletId);
    }
}
