import { Injectable } from '@angular/core';
import { Pedido ,Entity, Collection} from '../models/pedido';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(private httpClient: HttpClient) { }

  private apiURL = "http://127.0.0.1:8000/api";

  obtenerTrabajos(id:number): Observable<Collection> {
    return this.httpClient.get<Collection>(this.apiURL + '/empleados/'+id)
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
