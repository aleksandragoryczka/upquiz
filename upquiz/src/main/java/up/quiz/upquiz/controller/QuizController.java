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
@RequestMapping("/api/{idUser}/quizzes")
public class QuizController {

    private final QuizRepository quizRepository;
    private final UserRepository userRepository;

    public QuizController(QuizRepository quizRepository, UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
    }

    // Get all quizzes for the user
    @GetMapping("")
    public List<Quiz> getAllQuizzesForUser(@PathVariable long idUser) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));

        return quizRepository.findByUser(user);
    }

    // Get detailes about specific quiz for a user
    @GetMapping("/{idQuiz}")
    public Quiz getQuizByIdQUiz(@PathVariable long idUser, @PathVariable Long idQuiz) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));
        Quiz quiz = quizRepository.findByIdQuizAndUser(idQuiz, user)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQUiz", idQuiz));
        return quiz;
    }

    // Create a new quiz for a user
    @PostMapping("")
    public Quiz createQuizForUser(@PathVariable long idUser, @RequestBody Quiz newQuiz) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));
        // newQuiz.setQuizTitle(newQuiz.getQuizTitle());
        // newQuiz.setQuizDescription(newQuiz.getQuizDescription());
        // newQuiz.setQuizIcon(newQuiz.getQuizIcon());
        // newQuiz.setSumOfPoints(newQuiz.getSumOfPoints());
        // newQuiz.setPin(0);
        newQuiz.setUser(user);
        return quizRepository.save(newQuiz);
    }

    // Update an existing quiz for a user
    @PutMapping("/{idQuiz}")
    public Quiz updateQuizByIdQuiz(@PathVariable long idUser, @PathVariable long idQuiz,
            @RequestBody Quiz quizUpdated) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        quiz.setQuizTitle(quizUpdated.getQuizTitle());
        quiz.setQuizDescription(quizUpdated.getQuizDescription());
        quiz.setQuizIcon(quizUpdated.getQuizIcon());
        return quizRepository.save(quiz);
    }

    // Delete a quiz for a specific user
    @DeleteMapping("/{idQuiz}")
    public ResponseEntity<?> deleteQuizByIdQuiz(@PathVariable long idUser, @PathVariable long idQuiz) {
        Quiz quizToBeDeleted = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        quizRepository.delete(quizToBeDeleted);
        return ResponseEntity.ok().build();
    }
}
