import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinComponent } from '../pin/pin.component';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() quiz!: Quiz;
  @Input() showButtons: boolean = false;

  kot = 1;

  constructor(
    private modalService: NgbModal,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.showButtons);
  }

  getPin() {
    const modalRef = this.modalService.open(PinComponent);
  }

  deleteQuiz(idquiz) {
    this.quizService.delete(idquiz).subscribe(
      (response) => {
        console.log(response);

        let currentUrl = '/teacher/1'; //TODO: replace with userid
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate([currentUrl]));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getQuizById(idquiz) {
    this.quizService.get(idquiz).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data);
        console.log('user id; ' + this.quiz?.iduser);
        const iduser = this.route.snapshot.paramMap.get('id');
        this.router.navigate(['/' + iduser + '/quiz-details/' + idquiz]);
      },
      (error) => console.log(error)
    );
  }
}
