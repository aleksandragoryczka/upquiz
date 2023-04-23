package up.quiz.upquiz.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.Question;
import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.repository.QuestionRepository;
import up.quiz.upquiz.repository.QuizRepository;

@RestController
@RequestMapping("/api/{idQuiz}/questions")
public class QuestionController {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public QuestionController(QuestionRepository questionRepository, QuizRepository quizRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
    }

    // Get all questions for specific quiz
    @GetMapping("")
    public List<Question> getQuestionsForQuiz(@PathVariable long idQuiz) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        return questionRepository.findByQuiz(quiz);
    }

    // Add new question to quiz by quiz id
    @PostMapping("")
    public Question addQuestionToQuiz(@PathVariable long idQuiz, @RequestBody Question questionRequest) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));

        questionRequest.setQuiz(quiz);
        System.out.println(questionRequest.getAAnswer());
        return questionRepository.save(questionRequest);
    }

    /*
     * @PostMapping() Question createQuiz(@RequestBody Question question) { return
     * question; }
     * 
     * @GetMapping("/{idQuestion}") Question getQuestionById(@PathVariable long
     * idQuestion) { return null; }
     * 
     * @PutMapping("/{idQuestion}") Question updateQuestionById(@RequestBody
     * Question question, @PathVariable long idQuestion) { return null; }
     * 
     * @DeleteMapping("/{idQuestion}") void deleteQuestionById(@PathVariable long
     * idQuestion) { return; }
     */
}
