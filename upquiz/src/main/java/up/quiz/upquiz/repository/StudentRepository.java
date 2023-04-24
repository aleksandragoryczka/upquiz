package up.quiz.upquiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByQuiz(Quiz quiz);

}
