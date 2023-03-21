package up.quiz.upquiz.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import up.quiz.upquiz.models.User;

@RestController
@RequestMapping
public class UserController {

    @PostMapping()
    User createUser(@RequestBody User user) {
        return user;
    }

    @GetMapping()
    User getUserById(@RequestParam long idUser) {
        return null;
    }

    @PutMapping()
    User updateUserById(@RequestBody User user, @RequestParam long idUser) {
        return user;
    }

    @DeleteMapping()
    void deleteUser(@RequestParam long idUser) {
        return;
    }

}
