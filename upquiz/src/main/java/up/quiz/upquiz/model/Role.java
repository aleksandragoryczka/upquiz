package up.quiz.upquiz.model;

import jakarta.persistence.*;
import lombok.Data;
import up.quiz.upquiz.enums.ERole;

@Entity
@Table(name = "roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idrole;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;
}
