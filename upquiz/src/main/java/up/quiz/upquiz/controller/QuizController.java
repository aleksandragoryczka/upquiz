package up.quiz.upquiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

import java.util.List;
import java.util.stream.Collectors;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.Quiz;
import up.quiz.upquiz.repository.QuizRepository;

//import up.quiz.upquiz.model.Quiz;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizRepository quizRepository;

    public QuizController(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    @GetMapping("")
    CollectionModel<EntityModel<Quiz>> getAll() {
        List<EntityModel<Quiz>> quizes = quizRepository.findAll().stream()
                .map(quiz -> EntityModel.of(quiz,
                        linkTo(methodOn(QuizController.class).getQuizById(quiz.getIdQuiz())).withSelfRel(),
                        linkTo(methodOn(QuizController.class).getAll()).withRel("quizes")))
                .collect(Collectors.toList());

        return CollectionModel.of(quizes, linkTo(methodOn(QuizController.class).getAll()).withSelfRel());
    }

    @GetMapping("/{idQuiz}")
    EntityModel<Quiz> getQuizById(@PathVariable long idQuiz) {
        Quiz quiz = quizRepository.findById(idQuiz)
                .orElseThrow(() -> new ResourceNotFoundException("Quiz", "idQuiz", idQuiz));

        return EntityModel.of(quiz, linkTo(methodOn(QuizController.class).getQuizById(idQuiz)).withSelfRel(),
                linkTo(methodOn(QuizController.class).getAll()).withRel("quizes"));
    }

    @PostMapping("")
    ResponseEntity<?> createQuiz(@RequestBody Quiz newQuiz) {
        Quiz savedQuiz = quizRepository.save(newQuiz);
        EntityModel<Quiz> entityModel = EntityModel.of(savedQuiz,
                linkTo(methodOn(QuizController.class).getQuizById(savedQuiz.getIdQuiz())).withSelfRel(),
                linkTo(methodOn(QuizController.class).getAll()).withRel("quizes"));
        return ResponseEntity.created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri()).body(entityModel);
    }

}
