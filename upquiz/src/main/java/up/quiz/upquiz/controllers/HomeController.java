package up.quiz.upquiz.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @GetMapping("")
    @ResponseBody
    public void mainPage(){
        //TODO: strona główna
    }

    @GetMapping("/getstarted")
    @ResponseBody
    public void getStarted(){
        //TODO: choose enter PIN or login or register
    }

    @PostMapping("/login")
    public void login(){
        //TODO: formularz logowania
    }

    @PostMapping("/register")
    public void register(){
        //TODO: register form
    }

    @GetMapping("/aboutus")
    @ResponseBody
    public String  aboutUs(@RequestParam(required = false) String idTeacher){
        //TODO: about us tab (extra, alternatively), to be added user looged in param 
        return "//TODO: about us tab (extra, alternatively), to be added user looged in param ";
    }

    //TODO: TypeScript popup with joining user name and surname

}
