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

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    //Pedidos en espera
    this.pedidoService.getPedidos(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      //console.log(this.pedidos);
    });
    //Pedidos Aprobados
    this.pedidoService.getAprobados(this.id).subscribe((data: Collection)=>{
      this.pedidosAprobados = data.pedidos;
      console.log(this.pedidosAprobados);
    });
  }

  deletePedido(id:number){
    this.pedidoService.delete(id).subscribe(res => {
         this.pedidos = this.pedidos.filter(item => item.id !== id);
         console.log('Pedido deleted successfully!');
    })
  }

}
