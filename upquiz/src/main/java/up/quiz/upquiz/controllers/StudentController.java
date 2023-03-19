package up.quiz.upquiz.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class StudentController {   
    @PostMapping("/quiz")
    public void studentQuiz(@RequestParam String idQuiz, @RequestParam String idStudent) {
        //TODO: implement student's view of quiz
    }

    //TODO: implement result pop up via type script -> modal
    
}
