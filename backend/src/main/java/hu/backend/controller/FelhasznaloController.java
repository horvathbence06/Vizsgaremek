package hu.backend.controller;

import hu.backend.auth.PermissionCollector;
import hu.backend.converter.FelhasznaloConverter;
import hu.backend.dto.felhasznalo.FelhasznaloRead;
import hu.backend.dto.felhasznalo.FelhasznaloSave;
import hu.backend.dto.felhasznalo.FelhasznaloList;
import hu.backend.dto.felhasznalo.LoginRequest;
import hu.backend.model.Felhasznalo;
import hu.backend.service.FelhasznaloService;
import hu.backend.token.JWTTokenProvider;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("felhasznalo")
@Tag(name="Felhasználók kezelése", description = "Felhasználókezeléshez kapcsolódó funkciócsomagok")
@CrossOrigin(origins = "http://localhost:3000")
public class FelhasznaloController {
    @Autowired
    private FelhasznaloService felhasznaloService;

    private AuthenticationManager authenticationManager;
    private JWTTokenProvider jwtTokenProvider;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public FelhasznaloController(AuthenticationManager authenticationManager, JWTTokenProvider jwtTokenProvider, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PreAuthorize("hasAuthority('GET_FELHASZNALO')")
    @GetMapping("/{id}")
    @Operation(description = "Felhasználó kiválasztása azonosító alapján")
    public FelhasznaloRead readFelhasznalo(@PathVariable Integer id) {
        return felhasznaloService.readFelhasznalo(id);
    }

    @PreAuthorize("hasAuthority('LIST_FELHASZNALO')")
    @GetMapping("/list-all")
    @Operation(description = "Minden felhasználó listázása")
    public List<FelhasznaloList> readFelhasznaloList() {
        return felhasznaloService.readFelhasznaloList();
    }

    @PreAuthorize("hasAuthority('CREATE_FELHASZNALO')")
    @PostMapping("")
    @Operation(description = "Új felhasználó bejegyzése")
    public FelhasznaloRead createFelhasznalo(@RequestBody FelhasznaloSave felhasznaloSave) {
        return felhasznaloService.createFelhasznalo(felhasznaloSave);
    }

    @PreAuthorize("hasAuthority('UPDATE_FELHASZNALO')")
    @PutMapping("/{id}")
    @Operation(description = "Felhasználó adatainak megváltoztatása")
    public FelhasznaloRead updateFelhasznalo(@PathVariable Integer id, @RequestBody FelhasznaloSave felhasznaloSave) {
        return felhasznaloService.updateFelhasznalo(id, felhasznaloSave);
    }

    @PreAuthorize("hasAuthority('DELETE_FELHASZNALO')")
    @DeleteMapping("/{id}")
    @Operation(description = "Felhasználó törlése a rendszerből")
    public FelhasznaloRead deleteFelhasznalo(@PathVariable Integer id) {
        return felhasznaloService.deleteFelhasznalo(id);
    }

    @PostMapping("/login")
    @Operation(description = "Adminisztrátori bejelentkezés")
    public ResponseEntity<FelhasznaloRead> login(@RequestBody LoginRequest loginRequest) {
        authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        Felhasznalo felhasznalo = felhasznaloService.findUserByFelhasznaloNev(loginRequest.getUsername());
        PermissionCollector collector = new PermissionCollector(felhasznalo);
        HttpHeaders jwtHeader = getJWTHeader(collector);
        FelhasznaloRead felhasznaloRead = FelhasznaloConverter.convertModelToRead(felhasznalo);
        return new ResponseEntity<>(felhasznaloRead, jwtHeader, HttpStatus.OK);
    }


    private HttpHeaders getJWTHeader(PermissionCollector collector) {
        HttpHeaders jwtHeader = new HttpHeaders();
        jwtHeader.add("JWT_Token", jwtTokenProvider.generateJwtToken(collector));
        return jwtHeader;
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}