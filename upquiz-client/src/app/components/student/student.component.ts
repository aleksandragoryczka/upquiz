import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PointsComponent } from '../points/points.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  questions = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(PointsComponent);
  }
}
