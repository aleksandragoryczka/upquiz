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

  addQuestion() {
    this.questions = [QuizDetailsQuestionComponent, ...this.questions];
  }

  saveNewQuizWithQuestions(){ 
    const newQuiz = {
      quiztitle: this.quiz.quiztitle,
      quizdescription: this.quiz.quizdescription,
    };

    this.quizService.addQuiz(this.currentUser.iduser, newQuiz)
    .subscribe(
      (res) => {
        this.saveQuestion(res.idquiz);
      }
    );    
  }

  private saveQuestion(quizId): void{
    for(let question of this.questions){
      const newQuestion = {
        question: question.question,
        aanswer: question.aanswer,
        banswer: question.banswer,
        canswer: question.canswer,
        danswer: question.danswer,
        correctanswer: question.correctanswer,
      };

      this.questionService.addQuestionToQuiz(quizId, newQuestion).subscribe((res) => console.log(res)
      );
    }
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
