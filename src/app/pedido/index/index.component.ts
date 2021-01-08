import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(public pedidoService: PedidoService) {}

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

  

}
