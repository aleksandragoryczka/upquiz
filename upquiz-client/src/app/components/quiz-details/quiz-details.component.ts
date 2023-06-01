import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  questions: any[] = [Question];
  quiz: Quiz = new Quiz();
  currentUser: User;

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private userService: UserService,

  ) {}

  ngOnInit(): void {
    const idquiz = this.route.snapshot.paramMap.get('idquiz');
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res
      }
      })
    //const idquiz = this.quiz.idquiz;
    this.getQuizById(idquiz);
    this.questionService.getAllQuestionsForQuiz(idquiz).subscribe((data) => {
      this.questions = data;
    });
  }

  getQuizById(idquiz) {
    this.quizService.getQuizById(idquiz).subscribe(
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
  }

  addQuestion() {
    this.questions = [new QuizDetailsQuestionComponent, ...this.questions];
  }

  updateQuizWithQuestions(){
    for(let question of this.questions){
      const updatedQuestion = {
        question: question.question,
        aanswer: question.aanswer,
        banswer: question.banswer,
        canswer: question.canswer,
        danswer: question.danswer,
        correctanswer: question.correctanswer,
      };

      console.log(updatedQuestion);
      if(question.idquestion){
        this.questionService.updateQuestion(question.idquestion, updatedQuestion).subscribe((res) => console.log(res));
      }else{
        this.questionService.addQuestionToQuiz(this.quiz.idquiz, updatedQuestion).subscribe((res) => console.log(res))
      }
    }
  }
}
