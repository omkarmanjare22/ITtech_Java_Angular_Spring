import { Injectable } from '@angular/core';
import { LogIn } from './login';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:8080/api/v2/login";

  constructor(private httpClient: HttpClient) { }
  getLogInList(): Observable<LogIn[]>{
    return this.httpClient.get<LogIn[]>(`${this.baseURL}`);
  }

  createLogIn(logIn: LogIn): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, logIn);
  }

  getLogInById(id: number): Observable<LogIn>{
    return this.httpClient.get<LogIn>(`${this.baseURL}/${id}`);
  }

  updateLogIn(id: number, logIn: LogIn): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, logIn);
  }

  deleteLogIn(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
