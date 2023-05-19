import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

const baseUrl = 'http://localhost:8080/api/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getAllQuestionsForQuiz(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addQuestionToQuiz(idQuiz, questionBody): Observable<any>{
    return this.http.post(`${baseUrl}/add/${idQuiz}`, questionBody);
  }

  deleteQuestion(idQuestion: number): Observable<any>{
    return this.http.delete(`${baseUrl}/${idQuestion}`);
  }

}
