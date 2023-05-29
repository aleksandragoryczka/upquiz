package up.quiz.upquiz.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    //TOOD: add find by ....

    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);

}
