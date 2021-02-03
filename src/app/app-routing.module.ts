import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/pedido/index/index.component';
import { CreateComponent } from '../app/pedido/create/create.component';
import { MostrarComponent } from '../app/pedido/mostrar/mostrar.component';
import { AgregarComponent } from '../app/vehiculo/agregar/agregar.component';





const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'pedido/create/:vehiculoId', component: CreateComponent },
   { path: 'agregar-vehiculo', component: AgregarComponent },
   { path: 'pedidos', component: MostrarComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
