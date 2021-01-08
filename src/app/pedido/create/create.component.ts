import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  show: number=0;
  cat: number=0;
  precio: string='0';
  
  constructor(public projectService: PedidoService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      id_servicio: new FormControl('', Validators.required),
      monto: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      descripcion_vehiculo: new FormControl('', Validators.required),
      color_vehiculo: new FormControl('', Validators.required),
      chapa_vehiculo: new FormControl('', Validators.required),
      id_empleado_encargado: new FormControl('', Validators.required)

    });
  }

  get f(){
    return this.form.controls;
  }

  getPrice(c){
    if(this.show==1){
      if(c==1){
        this.precio='100.000';
      }
    }
  }

  submit(){
    console.log(this.form.value);
    this.projectService.create(this.form.value).subscribe(res => {
         console.log(res);
         //this.router.navigateByUrl('index');
         alert(this.cat);
    })
  }


}
