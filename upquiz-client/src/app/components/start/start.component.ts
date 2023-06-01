import { Component, EventEmitter, Output } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/models/student';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  insertedPin: number;

  constructor(
    private modalService: NgbModal,
    private studentService: StudentService,
    private router: Router,
    private toastr: ToastrService) {}

  open() {
    if(this.insertedPin >= 100000 && this.insertedPin <= 999999){
    this.studentService.checkInsertedPin(this.insertedPin).subscribe(
      (res) => { 
        if(res != null){
          const modalRef = this.modalService.open(JoinComponent); 
          modalRef.componentInstance.joinStudentEvent.subscribe(([firstname, surname]) => {this.createStudent(firstname, surname, res.idquiz)})
      }else{
        this.toastr.error("Wrong PIN. Try again")
      }
    })
    }else{
      this.toastr.error("PIN must contains 6 digits. Try again")
    }
  }

  createStudent(firstname: string, surname: string, idquiz: number){
    const newStudent: Student = {
      firstname: firstname,
      surname: surname,
    };

    this.studentService.createStudent(idquiz, newStudent).subscribe(
        (data) => {
          const idstudent = data;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([`/student/${idquiz}`], {queryParams: { idstudent }}));
        }
      );
  }

}
