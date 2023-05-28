import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { User } from 'src/app/models/user';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute } from '@angular/router';
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
  

  constructor(private route: ActivatedRoute,
    private userService: UserService, 
    private quizService: QuizService, 
    private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.paramMap.get('id'));
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
      }
    );    
  }

  private updateSumOfPoints(quizId: number, questionsAddedCounter: number): void{
    this.quizService.updateSumOfPointsForQuiz(quizId, questionsAddedCounter).subscribe((res) => console.log(res));
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
      console.log("qc: " + questionCounter);
      this.questionService.addQuestionToQuiz(quizId, newQuestion).subscribe();
    }
    return questionCounter;
  }

  private getUser(id): void {
    this.userService.get(id).subscribe(
      (data) => {
        this.currentUser = data;
        this.currentUser.password = '';
      },
    );
}
}
