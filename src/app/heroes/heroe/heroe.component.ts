import { Component } from "@angular/core";

/*
One-way Data Binding = Enlace de datos unidireccional
  El enlace de datos unidireccional vinculará los datos del componente a la vista (DOM)
  o de la vista al componente. El enlace de datos unidireccional es unidireccional.
  Solo puede vincular los datos del componente a la vista o de la vista al componente.
*/
@Component({
    selector: "app-heroe",
    templateUrl: './heroe.component.html',
})
export class HeroeComponent{
  nombre: string ='ironman';
  edad: number = 45;

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  getNameEdad(): string{
      return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }
  cambiarEdad():void{
    this.edad = 30;
  }
}
