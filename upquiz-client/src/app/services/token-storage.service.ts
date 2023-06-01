import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../models/authenticated-response.model';

//const TOKEN_KEY = 'auth-token';
//const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private static tokenFieldName = 'access_token';

  constructor() {}

  public setToken(authResponse: AuthenticatedResponse): void{
    localStorage.setItem(TokenStorageService.tokenFieldName, authResponse.token);
  }

  public getToken(): string| null{
    return localStorage.getItem(TokenStorageService.tokenFieldName);
  }

  public clearToken(): void{
    localStorage.removeItem(TokenStorageService.tokenFieldName);
  }
/*
  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) || '';
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || '');
  }*/
}