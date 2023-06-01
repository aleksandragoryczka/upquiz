import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent {
  @Output() joinStudentEvent = new EventEmitter<string[]>();
  name: string;
  surname: string;
  
  constructor(public activeModal: NgbActiveModal) {}

  joinStudent(name: string, surname: string): void{
    this.joinStudentEvent.emit([name, surname]);
    this.activeModal.dismiss('Cross click')
  }
}
