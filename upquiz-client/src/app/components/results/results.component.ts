import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  currentUser: User = new User();
  @Input() quiz: Quiz;
  results = [Student];

  constructor(private studentService: StudentService,
    private quizService: QuizService,
    private route: ActivatedRoute,){}

  ngOnInit(): void {
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
      },
      (error) => console.log(error)
    );
  }

}
