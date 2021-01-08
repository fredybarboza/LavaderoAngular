import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/pedido/index/index.component';
import { CreateComponent } from '../app/pedido/create/create.component';
import { EditComponent } from '../app/pedido/edit/edit.component';
import { ViewComponent } from './empleado/view/view.component';


const routes: Routes = [
   { path: 'index', component: IndexComponent },
   { path: 'pedido/create', component: CreateComponent },
   { path: 'pedido/:pedidoId/edit', component: EditComponent },
   { path: 'empleados', component: ViewComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
