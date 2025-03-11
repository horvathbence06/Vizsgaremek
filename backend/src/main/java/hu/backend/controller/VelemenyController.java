package hu.backend.controller;

import hu.backend.dto.velemeny.VelemenyList;
import hu.backend.dto.velemeny.VelemenyRead;
import hu.backend.dto.velemeny.VelemenySave;
import hu.backend.service.VelemenyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("velemeny")
@Tag(name = "Vélemények kezelése", description = "Véleményekhez kapcsolódó funkciócsomagok")
@CrossOrigin(origins = "http://localhost:3000")
public class VelemenyController {
    @Autowired
    private VelemenyService velemenyService;

    @GetMapping("/list-all")
    @Operation(description = "Minden vélemény listázása")
    public List<VelemenyList> readVelemenyList(){
        return velemenyService.readVelemenyList();
    }

    @PostMapping("")
    @Operation(description = "Új vélemény írása")
    public VelemenyRead createVelemeny(@RequestBody VelemenySave velemenySave){
        return velemenyService.createVelemeny(velemenySave);
    }

    @PutMapping("/{id}")
    @Operation(description = "Vélemény megváltoztatása")
    public VelemenyRead updateVelemeny(@PathVariable Integer id, @RequestBody VelemenySave velemenySave){
        return velemenyService.updateVelemeny(id, velemenySave);
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Vélemény törlése a rendszerből")
    public VelemenyRead deleteVelemeny(@PathVariable Integer id){
        return velemenyService.deleteVelemeny(id);
    }

    @GetMapping("/filter-by-orvos")
    @Operation(description = "Adott orvoshoz tartozó vélemények listázása")
    public List<VelemenyList> filterVelemenyByOrvos(@RequestParam Integer orvosId){
        return velemenyService.filterVelemenyByOrvos(orvosId);
    }
}
