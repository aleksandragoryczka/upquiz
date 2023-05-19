import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent {
  @Output() joinStudentEvent: EventEmitter<string[]> = new EventEmitter<string[]>();
  name: string;
  surname: string;
  
  constructor(public activeModal: NgbActiveModal) {}

  joinStudent(name: string, surname: string){
    this.joinStudentEvent.emit([name, surname]);
    this.activeModal.dismiss('Cross click')
  }
}
