package up.quiz.upquiz.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.model.Student;
import up.quiz.upquiz.repository.QuizRepository;
import up.quiz.upquiz.repository.StudentRepository;

@RestController
@RequestMapping("/api/students/{idQuiz}")
public class StudentController {

    private final StudentRepository studentRepository;
    private final QuizRepository quizRepository;

    public StudentController(StudentRepository studentRepository, QuizRepository quizRepository) {
        this.studentRepository = studentRepository;
        this.quizRepository = quizRepository;
    }

    // Create a new student with result
    @PostMapping("")
    public Student createStudent(@PathVariable long idQuiz, @RequestBody Student student) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        student.setQuiz(quiz);
        return studentRepository.save(student);
    }

    // Get all students' results for quiz
    @GetMapping("")
    public List<Student> getAllStudentsForQuiz(@PathVariable long idQuiz) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));

        return studentRepository.findByQuiz(quiz);
    }

}
