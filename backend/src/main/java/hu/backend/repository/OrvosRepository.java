package hu.backend.repository;

import hu.backend.dto.korhaz.KorhazList;
import hu.backend.model.Korhaz;
import hu.backend.model.Orvos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrvosRepository extends JpaRepository<Orvos, Integer> {
    @Query(value = "SELECT * FROM orvos o WHERE o.korhaz_id = :korhazId", nativeQuery = true)
    List<Orvos> findFilterByKorhaz(@Param("korhazId") Integer korhazId);

    @Query(value = "SELECT * FROM orvos o WHERE (:korhazId IS NULL OR o.korhaz_id = :korhazId) AND (:szakteruletId IS NULL OR o.szakterulet_id = :szakteruletId)", nativeQuery = true)
    List<Orvos> findByKorhazAndSzakterulet(@Param("korhazId") Integer korhazId, @Param("szakteruletId") Integer szakteruletId);
}
