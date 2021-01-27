import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AuthModule } from './auth/auth.module';
import { IndexComponent } from './pedido/index/index.component';
import { CreateComponent } from './pedido/create/create.component';
import { Route, RouterModule } from '@angular/router';
import { EditComponent } from './pedido/edit/edit.component';

import { HistorialComponent } from './pedido/historial/historial.component';
import { AgregarComponent } from './vehiculo/agregar/agregar.component';





@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    HistorialComponent,
    AgregarComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
