import { Component, Input } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() result: Student;
  @Input() maxPoints: number;

  countPercentageResult(): string{
    if(this.result.result && this.maxPoints){

      return (this.result.result / this.maxPoints * 100).toString + "%";
    }
    return "-";
  }
}
