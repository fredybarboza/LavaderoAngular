import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido ,Entity, Collection} from '../../models/pedido';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  id!: number;
  pedidos: Pedido[] = [];

  constructor(public empleadoService: EmpleadoService, private route: ActivatedRoute, private router: Router, pedidoService: PedidoService,private trabajoService: TrabajoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pedidoId'];
    this.trabajoService.obtenerTrabajos(this.id).subscribe((data: Collection)=>{
      this.pedidos = data.pedidos;
      console.log(this.pedidos);
    })
  
}
  
}
