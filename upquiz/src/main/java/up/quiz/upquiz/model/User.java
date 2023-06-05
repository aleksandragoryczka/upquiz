package up.quiz.upquiz.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;

@Data
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


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name="iduser"), inverseJoinColumns = @JoinColumn(name="idrole"))
    private Set<Role> roles = new HashSet<>();

    public User(String firstname, String surname, String email, String password){
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    public User(){}
}