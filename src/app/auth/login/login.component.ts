import { Component, OnInit } from '@angular/core';
import { CommonAuthService } from '../common-auth.service';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
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
  

  constructor(private auth: CommonAuthService, private router: Router, private userService: UserService) { }

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
        this.u = response.id;
        let a = this.u.toString();
        let key = '12345';
        //
        this.encriptado = CryptoJS.AES.encrypt(a.trim(), key.trim()).toString();
        console.log(this.encriptado);
        localStorage.setItem('UF3K2+Ghj', this.encriptado);
        //this.des = CryptoJS.AES.decrypt(b.trim(), a.trim()).toString(CryptoJS.enc.Utf8); 
        //
        //var desc = this.get('123',enc);
        //localStorage.setItem('akjlmnk', desc);
        //console.log(desc);
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
