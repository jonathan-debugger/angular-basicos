import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from "./contador/contador.module";
//Tarea
//crear un modulo llamado contador modulo
//declaraciones y exportaciones

@NgModule({//Decorador
  declarations: [
    AppComponent//componentes
  ],
  imports: [//importamos los modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
