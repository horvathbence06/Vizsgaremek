package hu.backend.repository;

import hu.backend.model.Idopont;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdopontRepository extends JpaRepository<Idopont, Integer> {
}
