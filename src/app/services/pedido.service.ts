import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {Pedido, Collection, Entity } from '../models/pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiURL = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
 
  create(pedido:Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.apiURL + '/pedidos', JSON.stringify(pedido), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getPedidos(id:string): Observable<Collection>
  {
    return this.httpClient.get<Collection>(this.apiURL + '/pedidos/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  getFinalizados(id:string): Observable<Collection>
  {
    return this.httpClient.get<Collection>(this.apiURL + '/finalizados/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAprobados(id:string): Observable<Collection>
  {
    return this.httpClient.get<Collection>(this.apiURL + '/aprobados/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getFactura(id:string): Observable<Collection>
  {
    return this.httpClient.get<Collection>(this.apiURL + '/facturas/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Pedido>(this.apiURL + '/pedidos/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  finalizar(id){
    return this.httpClient.put(this.apiURL+'/finalizados/'+id,id);
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
