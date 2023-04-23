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
@Table(name = "quizes")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idQuiz;

    @Column(name = "quizTitle", nullable = false, columnDefinition = "TEXT")
    private String quizTitle;

    @Column(name = "quizDescription", nullable = false, columnDefinition = "TEXT")
    private String quizDescription;

    @Column(name = "quizIcon", nullable = true, columnDefinition = "BYTEA")
    private byte[] quizIcon;

    @Column(name = "PIN", nullable = true)
    private int pin;

    @Column(name = "sumOfPoints", nullable = true)
    private long sumOfPoints;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idUser", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

}
