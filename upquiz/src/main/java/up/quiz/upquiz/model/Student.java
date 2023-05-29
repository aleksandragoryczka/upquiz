package up.quiz.upquiz.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idstudent;

    @Column(name = "firstname", nullable = false)
    private String firstname;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "result")
    private long result;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idquiz", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Quiz quiz;
}
