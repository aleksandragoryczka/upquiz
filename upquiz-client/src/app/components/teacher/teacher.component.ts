import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { User } from 'src/app/models/user';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  quizzes: Quiz[];
  currentUser: User = new User();
  iduser: number | undefined;

  constructor(
    private quizService: QuizService,
    private userService: UserService
  ) {}
  

  ngOnInit(): void {
    this.userService.user$.subscribe((res) => {
      if(res) {
        this.currentUser = res
      }}
    )
      if(this.userService.isUserAuthenticated){
            this.quizService
            .getAllQuizzesForUser(this.currentUser?.iduser)
            .subscribe((data) => {
              this.quizzes = data;
            });
      }
  }
}
