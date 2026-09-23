/* import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  figura: string = 'circulo';
  radio: string = '';
  base: string = '';
  altura: string = '';
  lado: string = '';
  apotema: string = '';

  resultado: number = 0;

  calcular(): void {
    switch (this.figura) {
      case 'circulo':
        this.resultado = 3.1416 * (parseFloat(this.radio) * parseFloat(this.radio));
        break;
      case 'rectangulo':
        this.resultado = parseFloat(this.base) * parseFloat(this.altura);
        break;
      case 'triangulo':
        this.resultado = (parseFloat(this.base) * parseFloat(this.altura)) / 2;
        break;
      case 'pentagono':
        let perimetro = parseFloat(this.lado) * 5;
        this.resultado = (perimetro * parseFloat(this.apotema)) / 2;
        break;
    }
  }
} */