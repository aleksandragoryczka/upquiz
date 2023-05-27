package up.quiz.upquiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

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
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
       // System.out.println(quiz.getUser());
        return quiz;
    }


    @GetMapping("/quiz/{idQuiz}/getUser")
    public Optional<User> getUserForQuiz(@PathVariable Long idQuiz){
        Quiz quiz = quizRepository.findById(idQuiz).orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        if(quiz != null){
            Optional<User> user = userRepository.findById(quiz.getUser().getIduser());
            System.out.println(user);
            return user;
        }
        return null;
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


    //Generate PIN and add its generation timestamp
    @GetMapping("/pin/{idQuiz}")
    public int generatePin(@PathVariable long idQuiz){
        int min = 100000;
        int max = 999999;
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        if(quiz.getPin() == 0 || Timestamp.valueOf(LocalDateTime.now().minus(30, ChronoUnit.MINUTES)).after(quiz.getPingeneratedtime())){
            int newPin = min + (int) (Math.random() * (max - min + 1));
            quiz.setPingeneratedtime(new Timestamp(System.currentTimeMillis()));
            quiz.setPin(newPin);
            quizRepository.save(quiz);
            return newPin;
        }
        return quiz.getPin();
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
