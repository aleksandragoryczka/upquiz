import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/quizzes';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getAllQuizzesForUser(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/quiz/${id}`);
  }
}
