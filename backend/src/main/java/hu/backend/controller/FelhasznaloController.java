package hu.backend.controller;

import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.service.FelhasznaloService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("felhasznalo")
@Tag(name="Felhasználók kezelése", description = "Felhasználókezeléshez kapcsolódó funkciócsomagok")
@CrossOrigin(origins = "http://localhost:3000")
public class FelhasznaloController {
    @Autowired
    private FelhasznaloService felhasznaloService;

    @GetMapping("/{id}")
    @Operation(description = "Felhasználó kiválasztása azonosító alapján")
    public FelhasznaloRead readFelhasznalo(@PathVariable Integer id) {
        return felhasznaloService.readFelhasznalo(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden felhasználó listázása")
    public List<FelhasznaloList> readFelhasznaloList() {
        return felhasznaloService.readFelhasznaloList();
    }

    @PostMapping("")
    @Operation(description = "Új felhasználó bejegyzése")
    public FelhasznaloRead createFelhasznalo(@RequestBody FelhasznaloSave felhasznaloSave) {
        return felhasznaloService.createFelhasznalo(felhasznaloSave);
    }

    @PutMapping("/{id}")
    @Operation(description = "Felhasználó adatainak megváltoztatása")
    public FelhasznaloRead updateFelhasznalo(@PathVariable Integer id, FelhasznaloSave felhasznaloSave) {
        return felhasznaloService.updateFelhasznalo(id, felhasznaloSave);
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Felhasználó törlése a rendszerből")
    public FelhasznaloRead deleteFelhasznalo(@PathVariable Integer id) {
        return felhasznaloService.deleteFelhasznalo(id);
    }
}
