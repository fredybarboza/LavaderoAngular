import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido,Entity } from '../../models/pedido';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  pedido!: Pedido;
  form!: FormGroup;

  constructor(public pedidoService: PedidoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pedidoId'];
    this.pedidoService.find(this.id).subscribe((data: Entity)=>{
      this.pedido = data.pedidos;
      console.log(data);
    });
    
    this.form = new FormGroup({
      id_empleado_encargado: new FormControl('', [Validators.required]),
    });
  }

  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.pedidoService.update(this.id, this.form.value).subscribe(res => {
         console.log(res);
         this.router.navigateByUrl('index');
    })
  }

}
