import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  categoria: string;
  cat: number=0;
  precio: string='-';
  show: boolean=false;
  id_usuario: string;
  id_vehiculo: string;
  
  constructor(public pedidoService: PedidoService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('UF3K2+Ghj');
    let b = this.id_usuario.toString();
    let key = '12345';
    this.categoria=localStorage.getItem('id_categoria');
    this.id_usuario=CryptoJS.AES.decrypt(b.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
    this.id_vehiculo = this.route.snapshot.params['vehiculoId'];
    console.log(this.id_vehiculo);
    this.form = new FormGroup({
      id_servicio: new FormControl('', Validators.required),
      id_categoria: new FormControl('', Validators.required),
      monto: new FormControl('', Validators.required),
      id_usuario: new FormControl('', Validators.required),
      id_vehiculo: new FormControl('', Validators.required),

    });
  }

  get f(){
    return this.form.controls;
  }
  servicio: number=0;
  getPrice(s){
   
      const p = document.getElementById('service');
      if(s==1){//SERVICIO 1
        this.show=false;
        p.innerHTML='&#10003; Lavado interior <br>&#10003; Lavado de Motor <br>&#10003; Lavado Exterior <br>&#10003; Encerado(Pulido)';
        switch(this.categoria){
          case '1': this.precio="80.000"; break;
          case '2': this.precio="90.000"; break;
          case '3': this.show=true; p.innerHTML=''; this.precio=null; break;
          case '4': this.precio="100.000"; break;
          case '5': this.precio="120.000"; break;
        }
      }
      else{
        if(s==2){//SERVICIO 2
          this.show=false;
          p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Encerado';
          switch(this.categoria){
            case '1': this.precio="40.000"; break;
            case '2': this.precio="50.000"; break;
            case '3': this.show=true; p.innerHTML=''; this.precio=null; break;
            case '4': this.precio="60.000"; break;
            case '5': this.precio="70.000"; break;
          }
        }
        else{
          if(s==3){//SERVICIO 3
            this.show=false;
            p.innerHTML='&#10003; Lavado Exterior';
            switch(this.categoria){
              case '1': this.precio="30.000"; break;
              case '2': this.precio="40.000"; break;
              case '3': this.precio="20.000"; break;
              case '4': this.precio="50.000"; break;
              case '5': this.precio="60.000"; break;
            }
          }
          else{
            if(s==4){//SERVICIO 4
              this.show=false;
              p.innerHTML='&#10003; Lavado Exterior <br>&#10003; Lavado Interior <br>&#10003; Encerado';
              switch(this.categoria){
                case '1': this.precio="50.000"; break;
                case '2': this.precio="60.000"; break;
                case '3': this.show=true; p.innerHTML=''; this.precio=null; break;
                case '4': this.precio="70.000"; break;
                case '5': this.precio="80.000"; break;
              }
            }
            else{
              if(s==5){//SERVICIO 5
              this.show=false;
              p.innerHTML='&#10003; Lavado Interior';
              switch(this.categoria){
                case '1': this.precio="20.000"; break;
                case '2': this.precio="30.000"; break;
                case '3': this.show=true; p.innerHTML=''; this.precio=null; break;
                case '4': this.precio="30.000"; break;
                case '5': this.precio="50.000"; break;
              }
              }
            
          }
        }
      }

    }
  }

  

  submit(){
    console.log(this.form.value);
    this.pedidoService.create(this.form.value).subscribe(res => {
         console.log(res);
         alert("Pedido Guardado");
         //this.router.navigateByUrl('index');
    })
  }


}
