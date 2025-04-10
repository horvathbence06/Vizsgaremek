package hu.backend.auth;

import hu.backend.model.Felhasznalo;
import hu.backend.service.FelhasznaloService;
import hu.backend.service.SpringContext;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class PermissionCollector implements UserDetails {
    private Felhasznalo felhasznalo;
    private FelhasznaloService felhasznaloService = SpringContext.getBean(FelhasznaloService.class);;

    public PermissionCollector(Felhasznalo felhasznalo) {
        this.felhasznalo = felhasznalo;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<String> permissions = felhasznaloService.findPermissionsByUser(this.felhasznalo.getFelhasznaloId());
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        permissions.forEach(permission -> authorities.add(new SimpleGrantedAuthority(permission)));
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.felhasznalo.getJelszo();
    }

    @Override
    public String getUsername() {
        return this.felhasznalo.getFelhasznaloNev();
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }
}