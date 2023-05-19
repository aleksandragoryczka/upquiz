import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  //questions = [1, 2, 3, 4];
  questions: Question[];
  @Input() quiz: Quiz;
  currentUser: User = new User();
  showButtons = true;

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    const idquiz = this.route.snapshot.paramMap.get('idquiz');
    //const iduser = this.route.snapshot.paramMap.get('id');
    //let id_quiz = 153;
    //this.currentUser.iduser = this.route.snapshot.paramMap.get('id');
    this.getQuizById(idquiz);
    this.questionService.getAllQuestionsForQuiz(idquiz).subscribe((data) => {
      this.questions = data;
    });
  }

  getQuizById(idquiz) {
    this.quizService.get(idquiz).subscribe(
      (data) => {
        this.quiz = data;
      },
      (error) => console.log(error)
    );
  }

  deleteQuestion(question: Question){ 
    if(typeof question.idquestion !== 'undefined'){
      this.questionService.deleteQuestion(question.idquestion).subscribe();
      location.reload();
    } 

    //console.log("index: " + questionIndex);
  }
}

    /*
    this.questionService.deleteQuestion(idQuestion).subscribe(
      () => 
    )*/
