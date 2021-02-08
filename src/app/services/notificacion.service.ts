import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Notificacion, Coleccion, Entity } from '../models/notificacion'

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private apiURL = "http://127.0.0.1:8000/api";
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getNotificaciones(id:string): Observable<Coleccion>{
    return this.httpClient.get<Coleccion>(this.apiURL + '/notificaciones/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Notificacion>(this.apiURL + '/notificaciones/' + id, this.httpOptions)
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
