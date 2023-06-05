import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticatedResponse } from '../models/authenticated-response.model';

const baseUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User | null>(null);
  public user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private jwtHelper: JwtHelperService){}
    
  public login(credentials): Observable<boolean> {
    return this.http.post<AuthenticatedResponse>(`${baseUrl}/auth/signin`, {
      email: credentials.email,
      password: credentials.password
    }).pipe(map((res: AuthenticatedResponse) => {
      if(!res) {
        return false;
      }
      this.tokenStorageService.setToken(res);
      this.setUser(res);

      return true;
    }));
  }

  public get isUserAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    if (!!token && !this.jwtHelper.isTokenExpired(token)) 
      return true;
    return false;
  }

  public register(user): Observable<any> {
    return this.http.post(`${baseUrl}/auth/register`, {
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      password: user.password
    });
  }

  public get(id: number | undefined): Observable<User> {
    return this.http
      .get<User>(`${baseUrl}/users/${id}`)
      .pipe(tap((user: User) => {
        this.user.next(user)}));
  }

  public update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/users/${id}`, data);
  }

  public logout():void{
    this.tokenStorageService.clearToken();
    this.clearUser();
  }

  private setUser(auth: AuthenticatedResponse): void{
    if(!auth) return;
    this.get(auth.id).subscribe((res) => {
      const user = res;
    })
  }

  private clearUser():void{
    this.user.next(null);
  }
}
