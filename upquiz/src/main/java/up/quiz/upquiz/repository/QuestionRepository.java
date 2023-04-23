package up.quiz.upquiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.Question;
import up.quiz.upquiz.model.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByQuiz(Quiz quiz);

}
