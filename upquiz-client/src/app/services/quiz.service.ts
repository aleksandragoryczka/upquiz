import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Quiz } from '../models/quiz';

const baseUrl = 'http://localhost:8080/api/quizzes';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quiz = new BehaviorSubject<Quiz | undefined>(undefined);
  public quiz$ = this.quiz.asObservable();


  constructor(private http: HttpClient) {}

  getAllQuizzesForUser(id: number | undefined): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getQuizById(id: number): Observable<any> {
    return this.http.get<Quiz>(`${baseUrl}/quiz/${id}`)
      .pipe(tap(
        (quiz: Quiz) => {
          this.quiz.next(quiz)
        }));
  }

  getUserForQuiz(idQuiz: number): Observable<any>{
    return this.http.get(`${baseUrl}/quiz/${idQuiz}/getUser`);
  }

  addQuiz(idUser: number, quizBody): Observable<any>{
    return this.http.post(`${baseUrl}/${idUser}`, quizBody);
  }

  generateQuizPin(idQuiz: number): Observable<any>{
    return this.http.get(`${baseUrl}/pin/${idQuiz}`);
  }

  updateSumOfPointsForQuiz(idQuiz: number, sumOfPoints: number): Observable<any>{
    return this.http.put(`${baseUrl}/updateSumOfPoints/${idQuiz}`, sumOfPoints);
  }
}
