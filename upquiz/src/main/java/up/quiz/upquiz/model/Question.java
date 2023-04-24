package up.quiz.upquiz.model;

import java.util.Optional;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idQuestion;

    @Column(name = "question", nullable = false, columnDefinition = "TEXT")
    private String question;

    @Column(name = "aAnswer", nullable = false, columnDefinition = "TEXT")
    private String aAnswer;

    @Column(name = "bAnswer", nullable = false, columnDefinition = "TEXT")
    private String bAnswer;

    @Column(name = "cAnswer", nullable = false, columnDefinition = "TEXT")
    private String cAnswer;

    @Column(name = "dAnswer", nullable = false, columnDefinition = "TEXT")
    private String dAnswer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idQuiz", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Quiz quiz;

}