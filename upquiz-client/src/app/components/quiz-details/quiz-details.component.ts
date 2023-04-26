import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent implements OnInit {
  //questions = [1, 2, 3, 4];
  questions: Question[];
  @Input() quiz: Quiz;
  showButtons = true;

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userid = 1; // TODO: Replace with the actual user ID
    let id_quiz = this.route.snapshot.paramMap.get('id');
    this.getQuizById(id_quiz);
    this.questionService.getAllQuestionsForQuiz(id_quiz).subscribe((data) => {
      this.questions = data;
    });
  }

  getQuizById(idquiz) {
    this.quizService.get(idquiz).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
