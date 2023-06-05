import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-quiz-details-question',
  templateUrl: './quiz-details-question.component.html',
  styleUrls: ['./quiz-details-question.component.scss'],
})
export class QuizDetailsQuestionComponent {
  @Input() question: Question;
  @Output() deleteQuestionEvent: EventEmitter<Question> = new EventEmitter<Question>();
  
  deleteQuestion(question: Question){
    this.deleteQuestionEvent.emit(question);
  }
}
