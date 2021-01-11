import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { PedidoRoutingModule } from './pedido-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HistorialComponent } from './historial/historial.component';
import { FacturaComponent } from './factura/factura.component';




@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent, HistorialComponent, FacturaComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidoModule { }
