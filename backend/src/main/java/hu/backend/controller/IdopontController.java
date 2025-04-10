package hu.backend.controller;

import hu.backend.dto.idopont.IdopontList;
import hu.backend.dto.idopont.IdopontRead;
import hu.backend.dto.idopont.IdopontSave;
import hu.backend.service.IdopontService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("idopont")
@Tag(name = "Időpontok kezelése", description = "Időpontokhoz kapcsolódó funkciócsomagok")
@CrossOrigin(origins = "http://localhost:3000")
public class IdopontController {
    @Autowired
    private IdopontService idopontService;

    @GetMapping("/{id}")
    @Operation(description = "Időpont kiválasztása azonosító alapján")
    public IdopontRead readIdopont(@PathVariable Integer id) {
        return idopontService.readIdopont(id);
    }

    @GetMapping("/list-all")
    @Operation(description = "Minden időpont listázása")
    public List<IdopontList> readIdopontList() {
        return idopontService.readIdopontList();
    }

    @PostMapping("")
    @Operation(description = "Új időpont bejegyzése")
    public IdopontRead createIdopont(@RequestBody IdopontSave idopontSave) {
        return idopontService.createIdopont(idopontSave);
    }

    @PreAuthorize("hasAuthority('DELETE_IDOPONT')")
    @DeleteMapping("/{id}")
    @Operation(description = "Időpont törlése a rendszerből")
    public IdopontRead deleteIdopont(@PathVariable Integer id) {
        return idopontService.deleteIdopont(id);
    }
}
