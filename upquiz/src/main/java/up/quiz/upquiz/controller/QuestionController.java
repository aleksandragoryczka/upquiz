package up.quiz.upquiz.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
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
    public Question addQuestionToQuiz(@PathVariable long idQuiz, @RequestBody Question newQuestion) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("quizRepository", "idQuiz", idQuiz));
        newQuestion.setQuiz(quiz);
        return questionRepository.save(newQuestion);
    }

    @PutMapping("/{idQuestion}")
    public Question updateQuestionByIdQuestion(@PathVariable long idQuiz, @PathVariable long idQuestion,
            @RequestBody Question questionUpdated) {
        Question question = questionRepository.findById(idQuestion)
                .orElseThrow(() -> new ResourceNotFoundException("questionRepository", "idQuestion", idQuestion));
        question.setQuestion(questionUpdated.getQuestion());
        question.setAAnswer(questionUpdated.getAAnswer());
        question.setBAnswer(questionUpdated.getBAnswer());
        question.setCAnswer(questionUpdated.getCAnswer());
        question.setDAnswer(questionUpdated.getDAnswer());
        return questionRepository.save(question);
    }

    @DeleteMapping("/{idQuestion}")
    public ResponseEntity<?> deleteQuestionByIdQuestion(@PathVariable long idQuiz, @PathVariable long idQuestion) {
        Question questionToBeDeleted = questionRepository.findById(idQuestion)
                .orElseThrow(() -> new ResourceNotFoundException("questionRepository", "idQuestion", idQuestion));
        questionRepository.delete(questionToBeDeleted);
        return ResponseEntity.ok().build();
    }
}
