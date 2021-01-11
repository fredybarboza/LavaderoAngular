import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';


import { ViewComponent } from './view/view.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { CrearComponent } from './crear/crear.component';




@NgModule({
  declarations: [ViewComponent, TrabajosComponent, CrearComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
