package up.quiz.upquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
