package hu.backend.repository;

import hu.backend.model.Korhaz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KorhazRepository extends JpaRepository<Korhaz, Integer> {
}
