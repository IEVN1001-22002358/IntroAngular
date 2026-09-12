import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = "SEBAS";

  duplicaNumero(n1:number):number{
    return n1*2
  }

  pelicula={
    titulo:'Spider-Man',
    fechaLanz:new Date(),
    precio:1234
  }
}
