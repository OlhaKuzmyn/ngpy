import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interfaces";
import {Observable, tap} from "rxjs";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access'
  private refreshTokenKey = 'refres'

  constructor(private httpClient:HttpClient) { }

  register(user:IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  activate(token: string): Observable<void> {
    return this.httpClient.get<void>(`${urls.auth}/activate/${token}`)
  }

  login(user:IUser): Observable<IToken> {
      return this.httpClient.post<IToken>(urls.auth, user)
  }

  refresh():Observable<IToken> {
    const refresh = this.getRefreshToken()
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens:IToken)=>{
        this.setToken(tokens)
      })
    )
  }

  //Partial<IUser>

  recoveryEmail(email: string): Observable<void> {
    return this.httpClient.post<void>(`${urls.auth}/checkemail`,email)
  }

  resetPassword(token:string, password:string): Observable<void> {
    return this.httpClient.post<void>(`${urls.auth}/changepass/${token}`,password)
  }

  setToken(token:IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access)
    localStorage.setItem(this.refreshTokenKey, token.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string
  }


  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.refreshTokenKey)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }

}

