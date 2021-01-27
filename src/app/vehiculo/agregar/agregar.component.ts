import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form!: FormGroup;
  id_usuario: string;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('id');
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
         console.log(res);
         alert("Vehiculo Guardado");
         //this.router.navigateByUrl('index');
    })
  }

}
