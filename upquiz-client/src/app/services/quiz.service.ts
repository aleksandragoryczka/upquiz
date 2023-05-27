import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { User } from '../models/user';

const baseUrl = 'http://localhost:8080/api/quizzes';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getAllQuizzesForUser(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getQuizById(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/quiz/${id}`);
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
}
