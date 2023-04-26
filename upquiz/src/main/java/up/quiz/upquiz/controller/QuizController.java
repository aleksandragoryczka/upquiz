package up.quiz.upquiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.model.User;
import up.quiz.upquiz.repository.QuizRepository;
import up.quiz.upquiz.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizRepository quizRepository;
    private final UserRepository userRepository;

    public QuizController(QuizRepository quizRepository, UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
    }

    // Get all quizzes for the user
    @GetMapping("/{idUser}")
    public List<Quiz> getAllQuizzesForUser(@PathVariable long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));

        return quizRepository.findByUser(user);
    }

    // Get detailes about specific quiz for a user
    @GetMapping("/quiz/{idQuiz}")
    public Quiz getQuizByIdQuiz(@PathVariable Long idQuiz) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQiz", idQuiz));
        return quiz;
    }

    // Create a new quiz for a user
    @PostMapping("/{idUser}")
    public Quiz createQuizForUser(@PathVariable long idUser, @RequestBody Quiz newQuiz) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));
        newQuiz.setUser(user);
        return quizRepository.save(newQuiz);
    }

    // Update an existing quiz for a user
    @PutMapping("/{idQuiz}")
    public Quiz updateQuizByIdQuiz(@PathVariable long idQuiz, @RequestBody Quiz quizUpdated) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        quiz.setQuiztitle(quizUpdated.getQuiztitle());
        quiz.setQuizdescription(quizUpdated.getQuizdescription());
        quiz.setQuizicon(quizUpdated.getQuizicon());
        return quizRepository.save(quiz);
    }

    // Delete a quiz for a specific user
    @DeleteMapping("/{idQuiz}")
    public ResponseEntity<?> deleteQuizByIdQuiz(@PathVariable long idQuiz) {
        Quiz quizToBeDeleted = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        quizRepository.delete(quizToBeDeleted);
        return ResponseEntity.ok().build();
    }
}
