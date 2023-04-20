package up.quiz.upquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
