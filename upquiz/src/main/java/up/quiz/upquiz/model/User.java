package up.quiz.upquiz.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Data
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idUser;

    @Column(name = "firstName", columnDefinition = "TEXT")
    private String firstName;

    @Column(name = "surname", columnDefinition = "TEXT")
    private String surname;

    @Column(name = "email", nullable = false, columnDefinition = "TEXT")
    private String email;

    @Column(name = "password", nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(name = "photo", nullable = true, columnDefinition = "BYTEA")
    private byte[] photo;

}