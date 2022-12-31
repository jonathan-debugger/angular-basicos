import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    ListadoComponent
  ],
  imports:[ //van modulos
    CommonModule //Sirve para utilizar directivas personalizadas de angular
  ]
})
export class HeroesModule{}
