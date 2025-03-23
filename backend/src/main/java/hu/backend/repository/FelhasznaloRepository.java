package hu.backend.repository;

import hu.backend.model.Felhasznalo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FelhasznaloRepository extends JpaRepository<Felhasznalo, Integer> {

    Felhasznalo findUserByFelhasznaloNev(String username);

    @Query(nativeQuery = true,
            value="SELECT p.permission_id FROM Permission p " +
                    "INNER JOIN Allocate a ON p.permission_id = a.permission_id " +
                    "WHERE a.felhasznalo_id = :felhasznaloId")
    List<String> findPermissionsByUser(Integer felhasznaloId);
}
