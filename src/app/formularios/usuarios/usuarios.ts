import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class UsuariosComponent {
  usuarioCorrecto: string = 'admin';
  passwordCorrecto: string = '1234';
  usuarioIngresado: string = '';
  passwordIngresado: string = '';
  mensajeResultado: string = '';

  validarAcceso(): void {
    if (this.usuarioIngresado !== this.usuarioCorrecto) { 
    this.mensajeResultado = 'El nombre de usuario no es correcto';
    } else if (this.passwordIngresado !== this.passwordCorrecto) {
      this.mensajeResultado = 'La contraseña no es correcta.';
    } else {
      this.mensajeResultado = `holaaaaaa, ${this.usuarioIngresado}.`;
      
    }
  }
}