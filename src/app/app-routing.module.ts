import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/pedido/index/index.component';
import { CreateComponent } from '../app/pedido/create/create.component';
import { FacturaComponent } from '../app/pedido/factura/factura.component';
import { HistorialComponent } from '../app/pedido/historial/historial.component';
import { MostrarComponent } from '../app/pedido/mostrar/mostrar.component';
import { AgregarComponent } from '../app/vehiculo/agregar/agregar.component';
import { PerfilComponent } from '../app/perfil/perfil.component';
import { ServiciosComponent } from '../app/inicio/servicios/servicios.component';
import { InicioComponent } from '../app/inicio/inicio.component';






const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'pedido/create/:vehiculoId', component: CreateComponent },
   { path: 'agregar-vehiculo', component: AgregarComponent },
   { path: 'pedidos', component: MostrarComponent },
   { path: 'historial', component: HistorialComponent },
   { path: 'perfil', component: PerfilComponent },
   { path: 'inicio', component: InicioComponent },
   { path: 'factura/:pedidoId', component: FacturaComponent },
   { path: '',component: InicioComponent, pathMatch: 'full' },
   { path: 'servicios', component: ServiciosComponent },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
