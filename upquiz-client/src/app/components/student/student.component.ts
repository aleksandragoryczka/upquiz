import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PointsComponent } from '../points/points.component';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit{
  questions = [Question];
  currentQuiz: Quiz = new Quiz();
  currentUser: User = new User();

  constructor(
    private modalService: NgbModal,
    private quizService: QuizService,
    private userService: UserService,
    private questionService: QuestionService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.getAllPartssofPageByQuizId(this.route.snapshot.paramMap.get('idquiz'));    
  }

  open() {
    const modalRef = this.modalService.open(PointsComponent);
  }

  private getAllPartssofPageByQuizId(idquiz): void {
    this.userService.get(idquiz).subscribe((data) => this.currentUser = data);
    this.quizService.getQuizById(idquiz).subscribe(
      (data) => {
        this.currentQuiz = data;
      },
    );
    this.questionService.getAllQuestionsForQuiz(idquiz).subscribe((data) => this.questions = data)
  }
}
