import { Component } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  insertedPin: number;

  constructor(private modalService: NgbModal,
    private studentService: StudentService) {}

  open() {
    if(this.insertedPin){
    this.studentService.checkInsertedPin(this.insertedPin).subscribe((res) => { //TODO: IT HAS TO RETURN QUIZ TO USER CAN JOIN QUUIZ WITH DANYM QUIZID
      console.log(res);
    if(res){
      const modalRef = this.modalService.open(JoinComponent); 
      modalRef.componentInstance.joinStudentEvent.subscribe(([firstname, surname]) => {this.createStudent(firstname, surname, res.idquiz)})
    } else{
      console.log("ZLY PIN"); //TODO: add popup or interceptor
    }})
  }
  }

  createStudent(firstname: string, surname: string, idquiz: number){
    const newStudent: Student = {
      firstname: firstname,
      surname: surname,

    };

    this.studentService.createStudent(idquiz, newStudent).subscribe((res) => {console.log(res)})
  }
}
