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
  categoria: number=0;
  cat: number=0;
  precio: string='-';
  show: boolean=false;
  
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
  servicio: number=0;
  getPrice(s){
    if(this.categoria==0){
      alert("Seleccione una categoria para ver el precio");
      this.servicio=s;
    }
    else{
      this.servicio=s;
      console.log("Categoria:"+this.categoria);
      console.log("Servicio:"+s);
      const p = document.getElementById('service');
      if(s==1){//SERVICIO 1
        this.show=false;
        p.innerHTML='&#10003; Lavado interior <br>&#10003; Lavado de Motor <br>&#10003; Lavado Exterior <br>&#10003; Encerado(Pulido)';
        switch(this.categoria){
          case 1: this.precio="80.000"; break;
          case 2: this.precio="90.000"; break;
          case 3: this.show=true; p.innerHTML=''; this.precio=null; break;
          case 4: this.precio="100.000"; break;
          case 5: this.precio="120.000"; break;
        }
      }
      else{
        if(s==2){//SERVICIO 2
          this.show=false;
          p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Encerado';
          switch(this.categoria){
            case 1: this.precio="40.000"; break;
            case 2: this.precio="50.000"; break;
            case 3: this.show=true; p.innerHTML=''; this.precio=null; break;
            case 4: this.precio="60.000"; break;
            case 5: this.precio="70.000"; break;
          }
        }
        else{
          if(s==3){//SERVICIO 3
            this.show=false;
            p.innerHTML='&#10003; Lavado Exterior';
            switch(this.categoria){
              case 1: this.precio="30.000"; break;
              case 2: this.precio="40.000"; break;
              case 3: this.precio="20.000"; break;
              case 4: this.precio="50.000"; break;
              case 5: this.precio="60.000"; break;
            }
          }
          else{
            if(s==4){//SERVICIO 4
              this.show=false;
              p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Lavado Interior <br>&#10003; Encerado';
              switch(this.categoria){
                case 1: this.precio="50.000"; break;
                case 2: this.precio="60.000"; break;
                case 3: this.show=true; p.innerHTML=''; this.precio=null; break;
                case 4: this.precio="70.000"; break;
                case 5: this.precio="80.000"; break;
              }
            }
            else{
              if(s==5){//SERVICIO 5
              this.show=false;
              p.innerHTML='&#10003; Lavado Interior';
              switch(this.categoria){
                case 1: this.precio="20.000"; break;
                case 2: this.precio="30.000"; break;
                case 3: this.show=true; p.innerHTML=''; this.precio=null; break;
                case 4: this.precio="30.000"; break;
                case 5: this.precio="50.000"; break;
              }
              }
            }
          }
        }
      }

    }
  }

  setShow(c){
    this.categoria=c;
    if(this.servicio==0){
      console.log("Servicio no seleccionado");
    }
    else{
      if(this.servicio!=0){
        this.getPrice(this.servicio);
      }
    }
    
  }

  submit(){
    console.log(this.form.value);
    this.projectService.create(this.form.value).subscribe(res => {
         console.log(res);
         alert("Pedido Guardado");
         this.router.navigateByUrl('index');
    })
  }


}
