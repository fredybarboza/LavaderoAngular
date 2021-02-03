import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  id: string;
  pedidos: Pedido[]=[];
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('id');
    //Pedidos Finalizados
    this.pedidoService.getFinalizados(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      console.log(this.pedidos);
    });
  }

}
