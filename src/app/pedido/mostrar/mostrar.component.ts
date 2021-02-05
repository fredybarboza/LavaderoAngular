import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

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
    this.id=localStorage.getItem('UF3K2+Ghj');
    let b = this.id.toString();
    let key='12345';
    this.id=CryptoJS.AES.decrypt(b.trim(), key.trim()).toString(CryptoJS.enc.Utf8);
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
    
  }

}
