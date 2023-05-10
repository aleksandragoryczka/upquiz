import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}
  quizzes: Quiz[];
  showButtons = true;
  currentUser: User = new User();

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentUser.iduser = parseInt(params['id']);
      this.quizService
        .getAllQuizzesForUser(this.currentUser.iduser)
        .subscribe((data) => {
          this.quizzes = data;
        });
    });
    //console.log(this.userid);
    //const userid = 1; // TODO: Replace with the actual user ID
  }
  /*
  currentUser: User;

  getUser(id): void {
    //TODO: add getting user by id
    this.userService.get(1).subscribe(
      (data) => {
        this.currentUser = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  /*
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getAllQuizzesForUser();
  }

  getAllQuizzesForUser(): void {
    this.quizService.getAll().subs;
  }*/
}
