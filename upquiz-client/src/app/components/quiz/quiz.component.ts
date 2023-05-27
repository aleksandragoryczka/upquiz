import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinComponent } from '../pin/pin.component';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() quiz: Quiz;

  constructor(
    private modalService: NgbModal,
    private quizService: QuizService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getPin(idQuiz: number): void {
    const modalRef = this.modalService.open(PinComponent);
    this.quizService.generateQuizPin(idQuiz).subscribe((res) => modalRef.componentInstance.pin = res);
  }

  deleteQuiz(idquiz: number):void {
    this.quizService.delete(idquiz).subscribe(
      () => {
        let currentUrl = `/teacher/${this.route.snapshot.paramMap.get('id')}`; //TODO: replace with userid
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate([currentUrl]));
      }
    );
  }

  getQuizById(idquiz: number): void {
    this.quizService.getQuizById(idquiz).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data);
        let id = this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/' + id + '/quiz-details/' + idquiz]);
      },
    );
  }

  getResultsForQuiz(idquiz: number): void{
    this.studentService.getResultsByQuizId(idquiz).subscribe(
      () => {
        let iduser = this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/' + iduser + '/results/' + idquiz]);
      },
    );
  }
}
