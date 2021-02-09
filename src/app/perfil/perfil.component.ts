import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User ,Entity} from '../models/user';
import { Router } from '@angular/router';
import { EncriptadoService } from 'src/app/services/encriptado.service';
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
  crear: boolean=true;
  editar: boolean=false;
  user: User={
    nombre: null,
    apellido: null,
    id_usuario: null,
    ci: null,
    celular: null,
    direccion: null
  };

  constructor(private userService: UserService, private encriptadoService: EncriptadoService, private router: Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('UF3K2+Ghj');
    this.id=this.encriptadoService.desencriptar(this.id);
    this.user_id=this.id;
    this.userService.getUser(this.id).subscribe((data: Entity)=>{
      this.user = data.user;
      if(this.user.nombre!=null){
        this.crear=false;
        this.editar=true;
      }
      //console.log(this.user);
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
    //console.log(this.form.value);
    this.userService.create(this.form.value).subscribe(res => {
      //console.log(res);
      alert("Guardado!");
      this.router.navigateByUrl('index');
    },error => {
      console.log(error);
      alert('Datos Incorrectos!');
 })
    
  }

}
