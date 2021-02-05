import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Vehiculo ,Collection} from '../../models/vehiculo';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  vehiculos: Vehiculo[]=[];
  id: string;
  constructor(public pedidoService: PedidoService, private router: Router, private userService: UserService,private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    
    if(this.id==null){
      this.router.navigateByUrl('login');
    }
    else{
      this.vehiculoService.getVehiculos(this.id).subscribe((data: Collection)=>{
        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos);
      });
    }  
  }

  salir(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigateByUrl('login');
  }

  deleteVehiculo(id:number){
    this.vehiculoService.delete(id).subscribe(res => {
         this.vehiculos = this.vehiculos.filter(item => item.id !== id);
         console.log('Vehiculo deleted successfully!');
    });
  }
  
  metodo(id_categoria){
    localStorage.setItem('id_categoria', id_categoria);
  }
  

  

  

}
