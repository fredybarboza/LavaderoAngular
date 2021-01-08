import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

export interface DataLogin{
  user: {
    
  };
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {

  constructor(private http: HttpClient) {}
  apiUrl: string = 'http://127.0.0.1:8000/api/'; 
  loggedIn = false;

  registerUser(form: any){
    console.log(form.value);
    return this.http.post(this.apiUrl+'register', form.value);
  }

  isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }

  logIn(form: any): Observable<any>{
    return this.http.post(this.apiUrl+'login', form.value);
    //return result;
  }

  logout(token: any): Observable<any>{
    return this.http.post(this.apiUrl+'logout', {'token': token});
    //return result;
  }
    

}
