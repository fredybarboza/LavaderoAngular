import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido ,Collection} from '../../models/pedido';
import { EncriptadoService } from 'src/app/services/encriptado.service';

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
  table: boolean=false;
  alert: boolean=false;
  perfil: boolean=false;
  constructor(private pedidoService: PedidoService, private encriptadoService: EncriptadoService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('UF3K2+Ghj');
    this.id=this.encriptadoService.desencriptar(this.id);
    //Pedidos Finalizados
    this.pedidoService.getFinalizados(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      //console.log(this.pedidos);
      if(this.pedidos.length!=0){
        this.alert=false;
         this.table=true;
      }
      else{
        this.alert=true;
      }
    });
  }

  viewFactura(id){
    this.show=true;
    this.pedidoService.getFactura(id).subscribe((data: Collection)=>{
      this.pedido = data.pedidos;
      console.log(this.pedido);
      if(this.pedido.length==0){
        this.perfil=true;
      }
    });
  }

}
