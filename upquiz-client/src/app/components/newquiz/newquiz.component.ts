import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';

@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.scss'],
})
export class NewquizComponent implements OnInit {
  showButtons = false;
  questions: any[] = [QuizDetailsQuestionComponent];

  addQuestion() {
    this.questions = [...this.questions, QuizDetailsQuestionComponent];
  }

  ngOnInit(): void {}
}
