package hu.backend.controller;

import hu.backend.dto.orvos.OrvosList;
import hu.backend.dto.orvos.OrvosRead;
import hu.backend.dto.orvos.OrvosSave;
import hu.backend.service.OrvosService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orvos")
@Tag(name = "Orvosok kezelése", description = "Orvosokhoz kapcsolódó funkciócsomagok")
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

    @PostMapping("")
    @Operation(description = "Új orvos bejegyzése")
    public OrvosRead createOrvos(@RequestBody OrvosSave orvosSave){
        return orvosService.createOrvos(orvosSave);
    }

    @PutMapping("/{id}")
    @Operation(description = "Orvos adatainak megváltoztatása")
    public OrvosRead updateOrvos(@PathVariable Integer id, @RequestBody OrvosSave orvosSave){
        return orvosService.updateOrvos(id, orvosSave);
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Orvos törlése a rendszerből")
    public OrvosRead deleteOrvos(@PathVariable Integer id){
        return orvosService.deleteOrvos(id);
    }
}
