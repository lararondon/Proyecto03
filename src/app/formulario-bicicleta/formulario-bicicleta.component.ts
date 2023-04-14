import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';

@Component({
  selector: 'app-formulario-bicicleta',
  templateUrl: './formulario-bicicleta.component.html',
  styleUrls: ['./formulario-bicicleta.component.css']
})

export class FormularioBicicletaComponent {
  
  bici_nueva : Bicicleta = new Bicicleta("","",0,0,0,false);
  mas_velocidad:number=0;
  menos_velocidad=0;
  mensaje="";
  mensaje_electrica:string=""

  constructor(){}
  
  enviar(){

    if(this.bici_nueva.electrica.valueOf() == true){
      this.mensaje_electrica="Eléctrica";
    }
    else{
      this.mensaje_electrica="No eléctrica";
    }
   
    this.mensaje="Color:"+this.bici_nueva.color+","+this.bici_nueva.marca+","+this.bici_nueva.velocidad+","+
    this.bici_nueva.pinones+","+this.bici_nueva.platos+","+this.mensaje_electrica;

  }

  acelerar(){
    this.bici_nueva.acelerar(this.mas_velocidad)
    this.mensaje=this.bici_nueva.color+","+this.bici_nueva.marca+","+this.bici_nueva.velocidad+","+
    this.bici_nueva.pinones+","+this.bici_nueva.platos+","+this.mensaje_electrica;

  }

  frenar(){
    this.bici_nueva.frenar(this.menos_velocidad)
    this.mensaje=this.bici_nueva.color+","+this.bici_nueva.marca+","+this.bici_nueva.velocidad+","+
    this.bici_nueva.pinones+","+this.bici_nueva.platos+","+this.mensaje_electrica;
  }
  
}
