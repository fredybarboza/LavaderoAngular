import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { IndexComponent } from './index/index.component';
//import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  { path: 'pedido', redirectTo: 'pedido/index', pathMatch: 'full'},
  { path: 'pedido/index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
