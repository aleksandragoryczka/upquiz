import { Component, Input } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-AuthorView',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.scss'],
})
export class AuthorViewComponent {
  @Input() currentQuiz: Quiz;
  @Input() currentUser: User;
   
}
