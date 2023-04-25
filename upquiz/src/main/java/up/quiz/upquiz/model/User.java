package up.quiz.upquiz.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long iduser;

    @Column(name = "firstname", columnDefinition = "TEXT", nullable = true)
    private String firstname;

    @Column(name = "surname", columnDefinition = "TEXT", nullable = true)
    private String surname;

    @Column(name = "email", columnDefinition = "TEXT", nullable = false, unique = true)
    private String email;

    @Column(name = "password", columnDefinition = "TEXT", nullable = false)
    private String password;

    @Column(name = "photo", nullable = true, columnDefinition = "BYTEA")
    private byte[] photo;

}