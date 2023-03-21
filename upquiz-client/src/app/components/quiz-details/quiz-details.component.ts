import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],
})
export class QuizDetailsComponent {
  questions = [1, 2, 3, 4, 5, 6, 7];
}
