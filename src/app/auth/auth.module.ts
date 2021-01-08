import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonAuthService } from './common-auth.service';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { RegisterComponent } from './register/register.component';
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonAuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}
  ]
})
export class AuthModule { }
