import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { User } from 'src/app/models/user';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {}
  quizzes: Quiz[];
  currentUser: User;

  ngOnInit(): void {
    //const user = this.tokenStorageService.getUser();
    //console.log("user id: " + user.id)
    /*this.getUser(user.id);
    this.quizService
        .getAllQuizzesForUser(user.id)
        .subscribe((data) => {
          this.quizzes = data;
        });*/

      const user = this.tokenStorageService.getUser();
      //this.getUser(user.id);
      console.log(user)


      this.userService.get(user.id).subscribe((data) => {
        this.currentUser = data;
        console.log("current user: " + this.currentUser.iduser)
        this.quizService
        .getAllQuizzesForUser(user.id)
        .subscribe((data) => {
          this.quizzes = data;
        });
      })
      //this.currentUser = this.getUser(user.id);
      //console.log("current user: " + this.currentUser.iduser)

      //this.route.params.subscribe((params) => {
      //this.currentUser.iduser = parseInt(params['id']);
      
    //console.log(this.userid);
    //const userid = 1; // TODO: Replace with the actual user ID
  }
/*
  getUser(id){
    return this.userService.get(id).subscribe(
      (data) => {
        return data;
        //console.log(data);
        //console.log("current: " + this.currentUser.email)
      },
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
