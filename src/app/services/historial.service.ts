import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Pedido, Collection, Entity } from '../models/pedido'

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private apiURL = "http://127.0.0.1:8000/api";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Collection> {
    return this.httpClient.get<Collection>(this.apiURL + '/finalizados')
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
 //MÉTODO PARA MOSTRAR FACTURA
 find(id:number): Observable<Entity> {
  return this.httpClient.get<Entity>('http://127.0.0.1:8000/api/finalizados/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
}

}
