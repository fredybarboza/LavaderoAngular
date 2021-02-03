import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  pedidos: Pedido[]=[];
  pedidosAprobados: Pedido[]=[];
  id: string;
  show: boolean=false;
  showDos: boolean=true;
  mostrar: boolean=false;
  mostrarDos: boolean=true;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    //Pedidos en espera
    this.pedidoService.getPedidos(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      if(this.pedidos.length>0){
        this.show=true;
      }
      
    });
    //Pedidos Aprobados
    this.pedidoService.getAprobados(this.id).subscribe((data: Collection)=>{
      this.pedidosAprobados = data.pedidos;
      if(this.pedidosAprobados.length>0){
        this.mostrar=true;
      }
    });
  }

  deletePedido(id:number){
    this.pedidoService.delete(id).subscribe(res => {
         this.pedidos = this.pedidos.filter(item => item.id !== id);
         console.log('Pedido deleted successfully!');
    });
    if(this.pedidos.length>0){
      this.show=false;
    }
  }

}
