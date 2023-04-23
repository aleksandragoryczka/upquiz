package up.quiz.upquiz.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idUser;

    @Column(name = "firstName", columnDefinition = "TEXT", nullable = true)
    private String firstName;

    @Column(name = "surname", columnDefinition = "TEXT", nullable = true)
    private String surname;

    @Column(name = "email", columnDefinition = "TEXT", nullable = false, unique = true)
    private String email;

    @Column(name = "password", columnDefinition = "TEXT", nullable = false)
    private String password;

    @Column(name = "photo", nullable = true, columnDefinition = "BYTEA")
    private byte[] photo;

}