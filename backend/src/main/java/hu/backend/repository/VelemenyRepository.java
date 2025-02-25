package hu.backend.repository;

import hu.backend.model.Orvos;
import hu.backend.model.Velemeny;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VelemenyRepository extends JpaRepository<Velemeny, Integer> {
    @Query(value = "SELECT * FROM velemeny v WHERE v.orvos_id = :orvosId", nativeQuery = true)
    List<Velemeny> findFilterByOrvos(@Param("orvosId") Integer orvosId);
}
