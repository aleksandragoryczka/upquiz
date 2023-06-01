import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PinComponent } from '../pin/pin.component';
import { Quiz } from '../../models/quiz';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit{
  @Input() quiz: Quiz;
  currentUser: User;

  constructor(
    private modalService: NgbModal,
    private quizService: QuizService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}


  ngOnInit(): void {
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res
      }
    })
  }

  getPin(idQuiz: number): void {
    const modalRef = this.modalService.open(PinComponent);
    this.quizService.generateQuizPin(idQuiz).subscribe((res) => modalRef.componentInstance.pin = res);
  }

  deleteQuiz(idquiz: number):void {
    const modalRef = this.modalService.open(DeletePopupComponent);
    modalRef.componentInstance.deleteQuizConfirmationEmitter.subscribe((confirm: boolean) => {
      if(confirm){
        this.quizService.delete(idquiz).subscribe(
          () => {
            let currentUrl = `/teacher/${this.currentUser.iduser}`; //TODO: replace with userid
            this.toastr.success("Successfully deleted quiz")
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => this.router.navigate([currentUrl]));
          }
        );
      }
    })
    
/*
    this.quizService.delete(idquiz).subscribe(
      () => {
        let currentUrl = `/teacher/${this.route.snapshot.paramMap.get('id')}`; //TODO: replace with userid
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate([currentUrl]));
      }
    );*/
  }

  getQuizById(idquiz: number): void {
      this.quizService.getAllQuizzesForUser(this.currentUser.iduser).subscribe((res) => this.quiz = res)
      this.router.navigate([`/${this.currentUser.iduser}/quiz-details/${idquiz}`]);
    //console.log("id: " + idquiz)
    /*this.quizService.getQuizById(idquiz).subscribe(
      (data) => {
        this.quiz = data;
        console.log(data);
        //let id = this.route.snapshot.paramMap.get('id');
        this.userService.user$.subscribe((res) => {const id = res?.iduser;
          this.router.navigate(['/' + id + '/quiz-details/' + idquiz]);
        })*/
        
     //},
    //);
  }

  getResultsForQuiz(idquiz: number): void{
    this.studentService.getResultsByQuizId(idquiz).subscribe(
      () => {
        this.router.navigate([`/${this.currentUser.iduser}/results/${idquiz}`]);
        //let iduser = this.route.snapshot.paramMap.get('id')
        //console.log(iduser);
        //this.router.navigate(['/' + iduser + '/results/' + idquiz]);
       // this.userService.user$.subscribe((res) => {const id = res?.iduser;
          
       // })
      },
    );
  }
}
