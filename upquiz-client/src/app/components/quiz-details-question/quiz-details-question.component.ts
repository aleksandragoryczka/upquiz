import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

enum CheckBoxType {
  A,
  B,
  C,
  D,
  NONE,
}

@Component({
  selector: 'app-quiz-details-question',
  templateUrl: './quiz-details-question.component.html',
  styleUrls: ['./quiz-details-question.component.scss'],
})
export class QuizDetailsQuestionComponent {
  @Input() question: Question;
  @Output() deleteQuestionEvent: EventEmitter<Question> = new EventEmitter<Question>();
  
  constructor(
    private questionService: QuestionService){}


  deleteQuestion(question: Question){
    this.deleteQuestionEvent.emit(question);
  }
}
