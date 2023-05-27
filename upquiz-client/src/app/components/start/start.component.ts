import { Component, EventEmitter, Output } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/models/student';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  insertedPin: number;
  //@Output() joinQuizEvent: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor(
    private modalService: NgbModal,
    private studentService: StudentService,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router) {}

  open() {
    if(this.insertedPin >= 100000 && this.insertedPin <= 999999){
    this.studentService.checkInsertedPin(this.insertedPin).subscribe(
      (res) => { //TODO: IT HAS TO RETURN QUIZ TO USER CAN JOIN QUUIZ WITH DANYM QUIZID
        if(res != null){
          const modalRef = this.modalService.open(JoinComponent); 
          modalRef.componentInstance.joinStudentEvent.subscribe(([firstname, surname]) => {this.createStudent(firstname, surname, res.idquiz)})
        }})
  }
  }

  createStudent(firstname: string, surname: string, idquiz: number){
    const newStudent: Student = {
      firstname: firstname,
      surname: surname,
    };

    this.studentService.createStudent(idquiz, newStudent).subscribe(
        () => {
          //let currentUrl = `/teacher/${this.route.snapshot.paramMap.get('id')}`; //TODO: replace with userid
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([`/student/${idquiz}`]));
        }
      );

    //console.log();
  }

}
