import { Component } from '@angular/core';

  /*
  @compoenent
  Decorador que marca una clase como un componente Angular y proporciona
  metadatos de configuración que determinan cómo se debe procesar, crear instancias y usar el componente en tiempo de ejecución.

  El decorador component
  El selector el nombre que este componente va a tener en este caso este mismo esta en el index.html

  Este recibe 2 objetos con 2 propiedades 1 el selector que viene siendo
  el nombre del componente.
  Segundo templeteUrl o template
  La diferencia entre estos dos.
  Es que templateUrl le indicamos el path o la url del componente
  Por otro lado templete insertamos directamente el componente

  */

//Decorador
@Component({
  selector:'./app-root',
  templateUrl: './app.component.html'
  //template `<span>Hola mundo xd<span>`
})
export class AppComponent {



}
