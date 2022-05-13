import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  titulo = 'CALCULA TUS DONACIONES';
  num1!: number;
  num2!: number;
  resultado!: number;

  valido: any;
  invalido: any;

  constructor() {
    
  }

  ngOnInit(): void {}


  sumar() {
    console.log(this.num1, this.num2);
    if (typeof this.num1 !== 'number'|| typeof this.num2 !== 'number'){
      this.invalido ="espera, te falta un número";
      return;
    }
  
    if (this.num1 <= 0) {
      this.invalido= 'Digito invalido';
    return;
    } else if (this.num2 <= 0) {
      this.invalido = 'Digito invalido';
    return;
    } else {
      this.resultado = this.num1 + this.num2;
      this.valido = 'La operación de la súma correcta';
    }

    //this.resultado = Number(this.num1) + Number(this.num2);
  }

  restar() {
    console.log(this.num1, this.num2);
    if (typeof this.num1 !== 'number'|| typeof this.num2 !== 'number'){
      this.invalido ="espera, te falta un número";
      return;
    }
  
    if (this.num1 <= 0) {
      this.invalido= 'Digito invalido';
    return;
    } else if (this.num2 <= 0) {
      this.invalido = 'Digito invalido';
    return;
    } else {
      this.resultado = this.num1 - this.num2;
      this.valido = 'La operación de la resta es correcta';
    }

    
  }
    
  multiplicar() {
    console.log(this.num1, this.num2);
    if (typeof this.num1 !== 'number'|| typeof this.num2 !== 'number'){
      this.invalido ="espera, te falta un número";
      return;
    }
  
    if (this.num1 <= 0) {
      this.invalido= 'Digito invalido';
    return;
    } else if (this.num2 <= 0) {
      this.invalido = 'Digito invalido';
    return;
    } else {
      this.resultado = this.num1 * this.num2;
      this.valido = 'La operación de la múltiplicación es correcta';
    }

    
  }

  dividir() {
    console.log(this.num1, this.num2);
    if (typeof this.num1 !== 'number'|| typeof this.num2 !== 'number'){
      this.invalido ="espera, te falta un número";
      return;
    }
  
    if (this.num1 <= 0) {
      this.invalido= 'Digito invalido';
    return;
    } else if (this.num2 <= 0) {
      this.invalido = 'Digito invalido';
    return;
    } else {
      this.resultado = this.num1 / this.num2;
      this.valido = 'La operación de la división correcta';
    }

    
  }
    
    





  cerrar() {
    this.invalido = null;
    this.valido = null;
  }
  



}
