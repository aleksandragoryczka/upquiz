package up.quiz.upquiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.model.User;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByUser(User user);
    Quiz findByPin(int pin);
}
