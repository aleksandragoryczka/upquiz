package up.quiz.upquiz.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import up.quiz.upquiz.models.Quiz;

@RestController
@RequestMapping()
public class QuizController {

    @PostMapping()
    Quiz createQuiz(@RequestBody Quiz quiz) {
        return quiz;
    }

    @GetMapping()
    Quiz getQuizById(@RequestParam long idQuiz) {
        return null;
    }

    @PutMapping()
    Quiz updateQuizById(@RequestBody Quiz quiz, @RequestParam long idQuiz) {
        return null;
    }

    @DeleteMapping()
    void deleteQuizById(@RequestParam long idQuiz) {
        return;
    }

}
