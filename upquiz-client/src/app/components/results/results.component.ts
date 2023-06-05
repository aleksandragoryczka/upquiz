import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  currentUser: User = new User();
  @Input() quiz: Quiz;
  results = [Student];
  sumOfPoints = 0

  constructor(
    private studentService: StudentService,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private userService: UserService){}

  ngOnInit(): void {
    this.userService.user$.subscribe((res) => {
      if(res){
        this.currentUser = res;
      }
    })

    const idquiz = this.route.snapshot.paramMap.get('idquiz');

    this.getQuizById(idquiz);
    if(idquiz != null){
      this.studentService.getResultsByQuizId(parseInt(idquiz)).subscribe((data) => {
        this.results = data;
      });
    }
  }

  getQuizById(idquiz) {
    this.quizService.getQuizById(idquiz).subscribe(
      (data) => {
        this.quiz = data;
        this.sumOfPoints = this.quiz.sumofpoints
      },
      (error) => console.log(error)
    );
  }

}
