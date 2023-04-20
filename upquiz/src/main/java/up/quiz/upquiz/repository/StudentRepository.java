package up.quiz.upquiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import up.quiz.upquiz.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
