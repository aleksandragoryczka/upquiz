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
    private long idquestion;

    @Column(name = "question", nullable = false, columnDefinition = "TEXT")
    private String question;

    @Column(name = "aanswer", nullable = false, columnDefinition = "TEXT")
    private String aanswer;

    @Column(name = "banswer", nullable = false, columnDefinition = "TEXT")
    private String banswer;

    @Column(name = "canswer", nullable = false, columnDefinition = "TEXT")
    private String canswer;

    @Column(name = "danswer", nullable = false, columnDefinition = "TEXT")
    private String danswer;

    @Column(name = "correctanswer", nullable = false, columnDefinition = "TEXT")
    private String correctanswer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idquiz", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Quiz quiz;

}