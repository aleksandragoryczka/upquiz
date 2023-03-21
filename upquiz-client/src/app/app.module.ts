import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StartComponent } from './components/start/start.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorViewComponent } from './components/author-view/author-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StudentComponent } from './components/student/student.component';
import { QuestionComponent } from './components/question/question.component';
import { PointsComponent } from './components/points/points.component';
import { JoinComponent } from './components/join/join.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { PinComponent } from './components/pin/pin.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultComponent } from './components/result/result.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { QuizDetailsQuestionComponent } from './components/quiz-details-question/quiz-details-question.component';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    StartComponent,
    LoginComponent,
    RegisterComponent,
    AuthorViewComponent,
    StudentComponent,
    QuestionComponent,
    PointsComponent,
    JoinComponent,
    TeacherViewComponent,
    PinComponent,
    TeacherComponent,
    QuizComponent,
    ResultsComponent,
    ResultComponent,
    QuizDetailsComponent,
    QuizDetailsQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    ScrollingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
