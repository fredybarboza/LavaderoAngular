import { Injectable } from '@angular/core';
import { Vehiculo ,Collection} from '../models/vehiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiURL = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getVehiculos(id:string): Observable<Collection>
  {
    return this.httpClient.get<Collection>(this.apiURL + '/vehiculos/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(vehiculo:Vehiculo): Observable<Vehiculo> {
    return this.httpClient.post<Vehiculo>(this.apiURL + '/vehiculos', JSON.stringify(vehiculo), this.httpOptions)
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
