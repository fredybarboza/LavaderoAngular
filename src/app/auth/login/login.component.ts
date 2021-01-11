import { Component, OnInit } from '@angular/core';
import { CommonAuthService } from '../common-auth.service';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  serverErrors = [];

  constructor(private auth: CommonAuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  get email(){ return this.loginForm.get('email'); }
  get password(){ return this.loginForm.get('password'); }

  login(){
    console.log(this.loginForm);
    this.auth.logIn(this.loginForm).subscribe(
      (response) => { 
        console.log(response.token);
        localStorage.removeItem('token');
        localStorage.setItem('token', response.access_token);
        alert("Estas dentro");
        this.router.navigate(['/index']);
      },
      (error) => { 
        localStorage.removeItem('token');
        this.serverErrors = error.error;
        console.log(this.serverErrors);
        alert("Datos incorrectos");
      }
    );
  }

}
