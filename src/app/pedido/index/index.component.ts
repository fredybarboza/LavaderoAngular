import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Vehiculo ,Collection} from '../../models/vehiculo';
import { Notificacion ,Coleccion} from '../../models/notificacion';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import * as CryptoJS from 'crypto-js';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { EncriptadoService } from 'src/app/services/encriptado.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  vehiculos: Vehiculo[]=[];
  notificaciones: Notificacion[]=[];
  id: string;
  n: string;
  a: number;
  r: number;
  name: string;
  constructor(public pedidoService: PedidoService, private router: Router, private vehiculoService: VehiculoService, private notificacionService: NotificacionService, private encriptadoService: EncriptadoService) {}

  ngOnInit(): void {
    this.name=localStorage.getItem('user');
    this.n=localStorage.getItem('UF3K2+Ghj');
    this.id=this.encriptadoService.desencriptar(this.n);
    //console.log(this.id); 
    
    if(this.name==null){
      this.router.navigateByUrl('login');
    }
    else{
      //MOSTRAR NOTIFICACIONES
      this.notificacionService.getNotificaciones(this.id).subscribe((data: Coleccion)=>{
        this.notificaciones = data.notificaciones;
        console.log(this.notificaciones);
      });
      //MOSTARA VEHICULOS
      this.vehiculoService.getVehiculos(this.id).subscribe((data: Collection)=>{
        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos);
      });
    }  
  }

  salir(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  deleteVehiculo(id:number){
    this.vehiculoService.delete(id).subscribe(res => {
         this.vehiculos = this.vehiculos.filter(item => item.id !== id);
         console.log('Vehiculo deleted successfully!');
    });
  }

  deleteNotificacion(id:number){
    this.notificacionService.delete(id).subscribe(res => {
         this.notificaciones = this.notificaciones.filter(item => item.id !== id);
    });
  }
  
  metodo(id_categoria){
    localStorage.setItem('id_categoria', id_categoria);
  }
  

  

  

}
