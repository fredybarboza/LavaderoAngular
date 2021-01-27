import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/pedido/index/index.component';
import { CreateComponent } from '../app/pedido/create/create.component';
import { EditComponent } from '../app/pedido/edit/edit.component';
import { AgregarComponent } from '../app/vehiculo/agregar/agregar.component';

import { HistorialComponent } from './pedido/historial/historial.component';



const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'pedido/create/:vehiculoId', component: CreateComponent },
   { path: 'pedido/:pedidoId/edit', component: EditComponent },
   { path: 'historial', component: HistorialComponent },
   { path: 'agregar-vehiculo', component: AgregarComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
