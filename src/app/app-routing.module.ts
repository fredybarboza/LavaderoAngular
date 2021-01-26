import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/pedido/index/index.component';
import { CreateComponent } from '../app/pedido/create/create.component';
import { EditComponent } from '../app/pedido/edit/edit.component';
import { ViewComponent } from './empleado/view/view.component';
import { TrabajosComponent } from './empleado/trabajos/trabajos.component';
import { HistorialComponent } from './pedido/historial/historial.component';
import { CrearComponent } from './empleado/crear/crear.component';


const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'pedido/create/:vehiculoId', component: CreateComponent },
   { path: 'pedido/:pedidoId/edit', component: EditComponent },
   { path: 'empleados', component: ViewComponent },
   { path: 'empleados/crear', component: CrearComponent },
   { path: 'empleados/:pedidoId/view', component: TrabajosComponent },
   { path: 'historial', component: HistorialComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
