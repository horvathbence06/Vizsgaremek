package hu.backend.repository;

import hu.backend.model.Velemeny;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VelemenyRepository extends JpaRepository<Velemeny, Integer> {
}
