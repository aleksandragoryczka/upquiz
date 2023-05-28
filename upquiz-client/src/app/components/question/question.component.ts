import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent{
  selectedValue : string;
  @Input() question: Question;
  @Output() checkAnswerEmitter = new EventEmitter<string>();

checkAnswer(){
    this.checkAnswerEmitter.emit(this.selectedValue);
  }
}
