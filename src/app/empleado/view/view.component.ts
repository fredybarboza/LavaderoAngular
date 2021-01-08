import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado ,Collection} from '../../models/empleado'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  empleados: Empleado[] = [];
   
  
  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe((data: Collection)=>{
      this.empleados = data.empleados;
      console.log(data);
    }); 
  }

}
