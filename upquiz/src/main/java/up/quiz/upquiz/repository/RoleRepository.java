package up.quiz.upquiz.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.enums.ERole;
import up.quiz.upquiz.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
    Optional<Role> findByName(ERole name);
    
}
