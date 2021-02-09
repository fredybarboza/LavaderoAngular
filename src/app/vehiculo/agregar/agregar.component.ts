import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Router } from '@angular/router';
import { EncriptadoService } from 'src/app/services/encriptado.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form!: FormGroup;
  id_usuario: string;

  constructor(private vehiculoService: VehiculoService, private router: Router, private encriptadoService: EncriptadoService) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('UF3K2+Ghj');
    this.id_usuario=this.encriptadoService.desencriptar(this.id_usuario);
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
        },error => {
          console.log(error);
          alert('Datos Incorrectos!');
    })
  }

}
