import { Component, Input, OnInit } from '@angular/core';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { User } from 'src/app/models/user';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { QuizService } from 'src/app/services/quiz.service';
import { QuestionService } from '../../services/question.service';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.scss'],
})
export class NewquizComponent implements OnInit {
  showButtons = false;
  questions: any[] = [Question];
  questionsList : Question[];
  currentUser: User = new User();
  quiz: Quiz = new Quiz();
  

  constructor(
    private router: Router,
    private userService: UserService, 
    private quizService: QuizService, 
    private questionService: QuestionService) {}

  ngOnInit(): void {
    console.log("kod")
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res;
      }
    })
  }

  addQuestion(): void{
    this.questions = [QuizDetailsQuestionComponent, ...this.questions];
  }

  saveNewQuizWithQuestions(): void{ 
    const newQuiz = {
      quiztitle: this.quiz.quiztitle,
      quizdescription: this.quiz.quizdescription,
    };

    this.quizService.addQuiz(this.currentUser.iduser, newQuiz)
    .subscribe(
      (res) => {
        let questionsAddedCounter = this.saveQuestion(res.idquiz);
        this.updateSumOfPoints(res.idquiz, questionsAddedCounter);

        let currentUrl = `/teacher/${this.currentUser.iduser}`; //TODO: replace with userid
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate([currentUrl]));
      }
    );    
  }

  private updateSumOfPoints(quizId: number, questionsAddedCounter: number): void{
    this.quizService.updateSumOfPointsForQuiz(quizId, questionsAddedCounter).subscribe();
  }

  private saveQuestion(quizId: number): number{
    let questionCounter = 0;
    for(let question of this.questions){
      const newQuestion = {
        question: question.question,
        aanswer: question.aanswer,
        banswer: question.banswer,
        canswer: question.canswer,
        danswer: question.danswer,
        correctanswer: question.correctanswer,
      };
      questionCounter += 1;
      this.questionService.addQuestionToQuiz(quizId, newQuestion).subscribe();
    }
    return questionCounter;
  }
}
