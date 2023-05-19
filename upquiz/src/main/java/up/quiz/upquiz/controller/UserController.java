package up.quiz.upquiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import up.quiz.upquiz.exception.ResourceNotFoundException;
import up.quiz.upquiz.model.User;
import up.quiz.upquiz.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create a new user
    @PostMapping("")
    public User createUser(@RequestBody User user) {
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
        // User user = userRepository.findById(idUser)
        // .orElseThrow(() -> new ResourceNotFoundException("userRepository", "idUser",
        // idUser));
        return userRepository.save(userRequest);
    }
    
    @DeleteMapping("/{idUser}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long idUser) {
        User userToBeDeleted = userRepository.findById(idUser)
                .orElseThrow(() -> new ResourceNotFoundException("User", "idUser", idUser));
        userRepository.delete(userToBeDeleted);
        return ResponseEntity.ok().build();
    }
}
