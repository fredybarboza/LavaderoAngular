import { Component, OnInit } from '@angular/core';
import { CommonAuthService } from '../common-auth.service';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { EncriptadoService } from 'src/app/services/encriptado.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  serverErrors = [];
  u: string;
  n: number;
  a: string;
  encriptado: string;
  cadena: string[];
  x: string="2";
  des: string;
  

  constructor(private auth: CommonAuthService, private router: Router, private userService: UserService,private encriptadoService: EncriptadoService) { }

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
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.name);
        this.u = response.id;
        this.encriptado=this.encriptadoService.encriptar(this.u);
        console.log(this.encriptado);
        localStorage.setItem('UF3K2+Ghj', this.encriptado);
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
