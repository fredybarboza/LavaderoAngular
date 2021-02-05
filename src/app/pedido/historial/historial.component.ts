import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  id: string;
  pedidos: Pedido[]=[];
  pedido: Pedido[]=[];
  show: boolean=false;
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('UF3K2+Ghj');
    let b = this.id.toString();
    let key='12345';
    this.id=CryptoJS.AES.decrypt(b.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
    //Pedidos Finalizados
    this.pedidoService.getFinalizados(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      console.log(this.pedidos);
    });
  }

  viewFactura(id){
    this.show=true;
    this.pedidoService.getFactura(id).subscribe((data: Collection)=>{
      this.pedido = data.pedidos;
      console.log(this.pedido);
    });
  }

}
