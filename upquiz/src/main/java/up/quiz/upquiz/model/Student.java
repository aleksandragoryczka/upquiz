package up.quiz.upquiz.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idStudent;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    // TODO: is nullable?
    @Column(name = "result")
    private long result;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idQuiz")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Quiz idQuiz;

    public Student() {
    }
}
