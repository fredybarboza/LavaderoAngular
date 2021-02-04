import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  id: string;
  constructor(public pedidoService: PedidoService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pedidoId'];
  }

}
