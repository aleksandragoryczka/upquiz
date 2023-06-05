package up.quiz.upquiz.security.payloads.request;

import java.util.Set;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank
    private String firstname;

    @NotBlank
    private String surname;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    private Set<String>role;

    @NotBlank
    private String password;

    
    public Set<String> getRole() {
        return this.role;
    }

    public void setRole(Set<String> role) {
        this.role = role;
    }
}
