import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Student } from '../models/student';

const baseUrl = 'http://localhost:8080/api/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  checkInsertedPin(pin: number): Observable<any> {
    return this.http.get(`${baseUrl}/checkPin/${pin}`);
  }

  createStudent(idQuiz: number, student: Student): Observable<any>{
    return this.http.post(`${baseUrl}/${idQuiz}`, student);
  }

  getResultsByQuizId(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/results/${id}`)
  }
}
