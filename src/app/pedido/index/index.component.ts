import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido'
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(public pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      //console.log(this.pedidos);
    })  
  }

  deletePedido(id:number){
    this.pedidoService.delete(id).subscribe(res => {
         this.pedidos = this.pedidos.filter(item => item.id !== id);
         console.log('Project deleted successfully!');
    })
  }

  finalizarPedido(id){
    this.pedidoService.finalizar(id).subscribe(data => {
      alert('Finalizado'),
      //console.log(data);
      this.router.navigateByUrl('historial');
    },error => {
      console.log(error);
      alert('Ocurrio un error');
    }
    
    );
  }

  

}
