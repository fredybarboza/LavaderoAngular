import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form!: FormGroup;
  id_usuario: string;

  constructor(private vehiculoService: VehiculoService, private router: Router) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('UF3K2+Ghj');
    let b = this.id_usuario.toString();
    let key='12345';
    this.id_usuario=CryptoJS.AES.decrypt(b.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
    this.form = new FormGroup({
      id_categoria: new FormControl('', Validators.required),
      id_usuario: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vehiculoService.create(this.form.value).subscribe(res => {
         //console.log(res);
         alert("Vehiculo Guardado!");
         this.router.navigateByUrl('index');
    })
  }

}
