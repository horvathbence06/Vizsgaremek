package hu.backend.repository;

import hu.backend.model.Orvos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrvosRepository extends JpaRepository<Orvos, Integer> {
}
