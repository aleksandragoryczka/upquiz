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
    private long idquiz;

    @Column(name = "quiztitle", nullable = false, columnDefinition = "TEXT")
    private String quiztitle;

    @Column(name = "quizdescription", nullable = false, columnDefinition = "TEXT")
    private String quizdescription;

    @Column(name = "quizicon", nullable = true, columnDefinition = "BYTEA")
    private byte[] quizicon;

    @Column(name = "pin", nullable = true)
    private int pin;

    @Column(name = "pingeneartedtime", nullable = true)
    private java.sql.Timestamp pingeneratedtime;

    @Column(name = "sumofpoints", nullable = true)
    private long sumofpoints;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "iduser", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

}
