import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  form!: FormGroup;
  
  constructor(public empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.empleadoService.create(this.form.value).subscribe(res => {
         //console.log('Empleado created successfully!');
         this.router.navigateByUrl('empleados');
    })
  }


}
