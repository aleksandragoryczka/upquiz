import { Component, Input, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuizDetailsQuestionComponent } from '../quiz-details-question/quiz-details-question.component';
import { User } from 'src/app/models/user';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.scss'],
})
export class NewquizComponent implements OnInit {
  showButtons = false;
  questions: any[] = [QuizDetailsQuestionComponent];
  currentUser: User = new User();
  quiz: Quiz = new Quiz();

  constructor(private route: ActivatedRoute) {}

  addQuestion() {
    this.questions = [...this.questions, QuizDetailsQuestionComponent];
  }

  ngOnInit(): void {}
}
