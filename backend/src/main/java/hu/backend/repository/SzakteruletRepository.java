package hu.backend.repository;

import hu.backend.model.Szakterulet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SzakteruletRepository extends JpaRepository<Szakterulet, Integer> {
}
