import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../services/historial.service';
import { Pedido ,Collection} from '../../models/pedido'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  pedidos: Pedido[] = [];
  
  constructor(private historialService: HistorialService) { }

  ngOnInit(): void {
    this.historialService.getAll().subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      console.log(this.pedidos);
    }) 
  }



}
