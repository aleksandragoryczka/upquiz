import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  quizzes: Quiz[];
  showButtons = true;

  ngOnInit(): void {
    const userid = 1; // TODO: Replace with the actual user ID
    this.quizService.getAllQuizzesForUser(userid).subscribe((data) => {
      this.quizzes = data;
    });
  }
  /*
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getAllQuizzesForUser();
  }

  getAllQuizzesForUser(): void {
    this.quizService.getAll().subs;
  }*/
}
