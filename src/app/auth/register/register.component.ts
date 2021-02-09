import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonAuthService } from '../common-auth.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  serverErrors = [];

  constructor(private auth: CommonAuthService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'password_confirmation': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get password_confirmation() { return this.registerForm.get('password_confirmation'); }

  registerUser(){
    this.auth.registerUser(this.registerForm).subscribe(success => {
      console.log(success);
      alert("Usuario creado!");
      this.route.navigate(['/login']);

    },error => { 
        //console.log(error);
        this.serverErrors = error.error.errors;
        console.log(this.serverErrors);
        ;
    });
  }

}
