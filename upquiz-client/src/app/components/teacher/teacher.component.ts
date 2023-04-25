import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  //quizzes = [1, 2, 3, 4, 5, 6, 7, 8];

  quizzes: any;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getAllQuizzesForUser();
  }

  getAllQuizzesForUser(): void {
    this.quizService.getAll().subs;
  }
}
