package up.quiz.upquiz.controllers;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/{idTeacher}")
public class TeacherController {

    @GetMapping(value="")
    @ResponseBody
    public void getQuizResults(@PathVariable String idTeacher, @RequestParam (required = false) String idQuiz) {
        if(idQuiz==null){
            //TODO: implement main teacher panel
        }
        else{
            //TOOD: implement results of users' attempts of quiz=idQuiz
        }
    }

    @PostMapping(value="/createnew")
    public void createNewQuiz(@PathVariable String idTeacher) {
        //TODO: creating new quiz from zero
    }
    
    @PostMapping(value="/manageaccount")
    public void getManageAccount(@PathVariable String idTeacher) {
        //TODO: teacher account settings
    }

    @GetMapping(value="/show")
    @ResponseBody
    public String  getShowQuiz(@PathVariable String idTeacher, @RequestParam (required = true) String idQuiz) {
        //TODO: show questions of quiz chosen
        return idTeacher + "/show" + idQuiz;
    }

    @PostMapping(value="/edit")
    public void editQuiz(@PathVariable String idTeacher, @RequestParam (required = true) String idQuiz) {
        //todo: editign quiz questions
    }
    
    /*TODO: popups to be impleneted in TS:
     * - getpin popup
     * - /show/{idQuiz}/getpin - generowanie pinu z poziomu bycia w podglądzie wszytskich pytań
     */
    

}
