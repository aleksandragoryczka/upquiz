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
import { StudentService } from 'src/app/services/student.service';

type MarkedAnswers = Record<number, string>;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit{
  idstudent: number;
  questions: Question[];
  currentQuiz: Quiz = new Quiz();
  currentUser: User = new User();
  studentPoints: number = 0;
  markedAnswers: MarkedAnswers = {};
  
  constructor(
    private modalService: NgbModal,
    private quizService: QuizService,
    private userService: UserService,
    private questionService: QuestionService,
    private studentService: StudentService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.getAllPartssofPageByQuizId(this.route.snapshot.paramMap.get('idquiz'));  
      this.route.queryParams.subscribe(params => {
        this.idstudent = params["idstudent"];
      })  
  }

  submitAndCheckAnswers() {
    for(let question of this.questions){
      if(question.correctanswer === this.markedAnswers[question.idquestion]){
        this.studentPoints += 1;
      }
    }
    this.studentService.addStudentResult(this.idstudent, this.studentPoints).subscribe((data) => console.log(data));

    const modalRef = this.modalService.open(PointsComponent);
    modalRef.componentInstance.studentPoints = this.studentPoints; 
    modalRef.componentInstance.maxPoints = this.currentQuiz.sumofpoints;
  }

  checkAnswer(markedAnswer: string, question: Question){
    this.markedAnswers[question.idquestion] = markedAnswer;
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
