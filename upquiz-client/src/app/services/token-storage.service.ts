import { Injectable } from '@angular/core';
import { AuthenticatedResponse } from '../models/authenticated-response.model';

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
}