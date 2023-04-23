package up.quiz.upquiz.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;
import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.User;
import up.quiz.upquiz.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create a new user
    @PostMapping()
    public User createUser(@RequestBody @Valid User user) {
        return userRepository.save(user);
    }

    // Get a specific user info by id
    @GetMapping("/{idUser}")
    public User getUserByIdUser(@PathVariable long idUser) {
        return userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("User", "idUser", idUser));
    }

    @PutMapping("/{idUser}")
    public User updateUser(@PathVariable long idUser, @RequestBody User userRequest) {
        User user = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser", idUser));
        user.setFirstName(userRequest.getFirstName());
        user.setSurname(userRequest.getSurname());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        user.setPhoto(userRequest.getPhoto());
        return userRepository.save(user);

    }

    /*
     * @PostMapping() User createUser(@RequestBody User user) { return user; }
     * 
     * @GetMapping("/{idUser}") User getUserById(@PathVariable long idUser) { return
     * null; }
     * 
     * @PutMapping("/{idUser}") User updateUserById(@RequestBody User
     * user, @PathVariable long idUser) { return user; }
     * 
     * @DeleteMapping("/{idUser}") void deleteUser(@PathVariable long idUser) {
     * return; }
     */

}
