package up.quiz.upquiz.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.model.Student;
import up.quiz.upquiz.repository.QuizRepository;
import up.quiz.upquiz.repository.StudentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/students")
public class StudentController {

    private final StudentRepository studentRepository;
    private final QuizRepository quizRepository;

    public StudentController(StudentRepository studentRepository, QuizRepository quizRepository) {
        this.studentRepository = studentRepository;
        this.quizRepository = quizRepository;
    }

    // Create a new student with result
    @PostMapping("/{idQuiz}")
    public Student createStudent(@PathVariable long idQuiz, @RequestBody Student student) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        student.setQuiz(quiz);
        return studentRepository.save(student);
    }

    //check if quiz with given PIN exists
    @GetMapping("/checkPin/{pin}")
    public Quiz checkPin(@PathVariable int pin){
        Quiz quiz = quizRepository.findByPin(pin);
        if(quiz != null){
            return quiz;
        }
        return null;
    }

    // Get all students' results for quiz
    @GetMapping("{idQuiz}")
    public List<Student> getAllStudentsForQuiz(@PathVariable long idQuiz) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));

        return studentRepository.findByQuiz(quiz);
    }

}
