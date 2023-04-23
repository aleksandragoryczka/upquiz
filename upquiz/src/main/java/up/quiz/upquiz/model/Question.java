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
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idQuestion;

    @Column(name = "question", nullable = false, columnDefinition = "TEXT")
    private String question;

    @Column(name = "aAnswer", columnDefinition = "TEXT", nullable = false)
    private String aAnswer;

    @Column(name = "bAnswer", columnDefinition = "TEXT", nullable = false)
    private String bAnswer;

    @Column(name = "cAnswer", columnDefinition = "TEXT", nullable = false)
    private String cAnswer;

    @Column(name = "dAnswer", columnDefinition = "TEXT", nullable = false)
    private String dAnswer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idQuiz", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Quiz quiz;

}