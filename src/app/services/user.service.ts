import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Entity, User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  id: number;
  private apiURL = "http://127.0.0.1:8000/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUser(id): Observable<Entity> {
    return this.httpClient.get<Entity>(this.apiURL + '/perfil/'+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(user:User): Observable<User>{
    return this.httpClient.post<User>(this.apiURL + '/perfil', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  
}
