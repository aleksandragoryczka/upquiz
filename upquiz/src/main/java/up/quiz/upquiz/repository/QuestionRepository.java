package up.quiz.upquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import up.quiz.upquiz.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
