import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  createUser(user): Observable<any> {
    return this.http.post(baseUrl, user);
  }

  get(id: number): Observable<User> {
    return this.http
      .get<User>(`${baseUrl}/${id}`)
      .pipe(tap((user: User) => this.user.next(user)));
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
