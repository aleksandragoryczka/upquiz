import { Component, ViewChild } from '@angular/core';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

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
  check_box_type = CheckBoxType;
  currentlyChecked: CheckBoxType;

  //Switching to edit mode

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    this.currentlyChecked = targetType;
  }
}
