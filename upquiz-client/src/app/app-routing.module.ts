import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StartComponent } from './components/start/start.component';
import { StudentComponent } from './components/student/student.component';
import { QuestionComponent } from './components/question/question.component';
import { PointsComponent } from './components/points/points.component';
import { JoinComponent } from './components/join/join.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { ResultComponent } from './components/result/result.component';
import { ResultsComponent } from './components/results/results.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NewquizComponent } from './components/newquiz/newquiz.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'start', component: StartComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'teacher/:id/settings', component: SettingsComponent },
  //{ path: 'teacher/:id/quizzes', component: NewquizComponent },
  { path: 'teacher/:id/new-quiz', component: NewquizComponent },
  { path: ':id/quiz-details/:idquiz', component: QuizDetailsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
