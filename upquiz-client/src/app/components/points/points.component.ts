import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent {
  @Input() public studentPoints;
  @Input() public maxPoints;
  constructor(public activeModal: NgbActiveModal) {}

  countPercentageResult(): string{
    return "(" + (this.studentPoints / this.maxPoints * 100).toString() + "%)";
  }
}
