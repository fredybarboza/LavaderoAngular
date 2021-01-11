import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../services/historial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido,Entity } from '../../models/pedido';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  id!: number;
  pedido!: Pedido; 
  
  constructor(private historialService: HistorialService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pedidoId'];
    this.historialService.find(this.id).subscribe((data: Entity)=>{
      this.pedido = data.pedidos;
      console.log(data);
    });
  }

}
