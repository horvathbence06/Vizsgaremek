package hu.backend.controller;

import hu.backend.dto.szolgaltatas.SzolgaltatasList;
import hu.backend.dto.szolgaltatas.SzolgaltatasRead;
import hu.backend.dto.szolgaltatas.SzolgaltatasSave;
import hu.backend.service.SzolgaltatasService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("szolgaltatas")
@Tag(name = "Szolgáltatások kezelése", description = "Szolgáltatásokhoz kapcsolódó funkciócsomag")
@CrossOrigin(origins = "http://localhost:3000")
public class SzolgaltatasController {
    @Autowired
    private SzolgaltatasService szolgaltatasService;

    @GetMapping("/{id}")
    @Operation(description = "Szolgáltatás kiválasztása azonosító alapján")
    public SzolgaltatasRead readSzolgaltatas(@PathVariable Integer id) {
        return szolgaltatasService.readSzolgaltatas(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden szolgáltatás listázása")
    public List<SzolgaltatasList> readSzolgaltatasList() {
        return szolgaltatasService.readSzolgaltatasList();
    }

    @PreAuthorize("hasAuthority('CREATE_SZOLGALTATAS')")
    @PostMapping("")
    @Operation(description = "Új szolgáltatás bejegyzése")
    public SzolgaltatasRead createSzolgaltatas(@RequestBody SzolgaltatasSave szolgaltatasSave) {
        return szolgaltatasService.createSzolgaltatas(szolgaltatasSave);
    }

    @PreAuthorize("hasAuthority('UPDATE_SZOLGALTATAS')")
    @PutMapping("/{id}")
    @Operation(description = "Szolgáltatás adatainak megváltoztatása")
    public SzolgaltatasRead updateSzolgaltatas(@PathVariable Integer id, @RequestBody SzolgaltatasSave szolgaltatasSave) {
        return szolgaltatasService.updateSzolgaltatas(id, szolgaltatasSave);
    }

    @PreAuthorize("hasAuthority('DELETE_SZOLGALTATAS')")
    @DeleteMapping("/{id}")
    @Operation(description = "Szolgáltatás törlése a rendszerből")
    public SzolgaltatasRead deleteSzolgaltatas(@PathVariable Integer id) {
        return szolgaltatasService.deleteSzolgaltatas(id);
    }
}
