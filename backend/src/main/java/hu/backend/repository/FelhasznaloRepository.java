package hu.backend.repository;

import hu.backend.model.Felhasznalo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FelhasznaloRepository extends JpaRepository<Felhasznalo, Integer> {
}
