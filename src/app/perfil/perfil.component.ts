import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User ,Entity} from '../models/user';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id: string;
  form!: FormGroup;
  user_id: string;
  user: User={
    nombre: null,
    apellido: null,
    id_usuario: null,
    ci: null,
    celular: null,
    direccion: null
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('UF3K2+Ghj');
    let b = this.id.toString();
    let key='12345';
    this.id=CryptoJS.AES.decrypt(b.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
    this.user_id=this.id;
    this.userService.getUser(this.id).subscribe((data: Entity)=>{
      this.user = data.user;
      console.log(this.user);
    });
    this.form = new FormGroup({
      id_usuario: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
      console.log(res);
      //alert("Vehiculo Guardado");
      //this.router.navigateByUrl('index');
 })
    
  }

}
