import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-donaciones',
  templateUrl: './formulario-donaciones.component.html',
  styleUrls: ['./formulario-donaciones.component.css'],
})
export class FormularioDonacionesComponent implements OnInit {
  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.obtenerCampoFormulario();
  }

  obtenerCampoFormulario() {
    this.formValue = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      ciudad: [''],
      valor: [''],
      telefono: [''],
    });
  }

  guardar(detalleFormulario:any) {

    if(detalleFormulario.value.nombre==""){

      alert("No puede estar vacio")
      
    }
    else if(detalleFormulario.value.apellido==""){
      alert("No puede estar vacio")
      
    }
     
    else if (detalleFormulario.value.email==""){
      alert("No puede estar vacio")
      
    }
    else if (detalleFormulario.value.ciudad==""){
      alert("No puede estar vacio")
    }
    else if (detalleFormulario.value.valor==""){
        alert("No puede estar vacio") 
    }
    else if (detalleFormulario.value.telefono==""){
    alert("No puede estar vacio")    
    } 
    
    else{
    
    alert("Se ha enviado tu donación");
  }
  }
}
