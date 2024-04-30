import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  email: string = '';
  clave: string = '';
  sesionIniciada: boolean = false;
  userExists: boolean = false; 

  flagError: boolean = false;
  msjError: string = "";


  constructor(public auth: Auth, private router: Router, private usuarioService: UsuarioService) {

  }

  registrarUsuario() {
    createUserWithEmailAndPassword(this.auth, this.email, this.clave).then((res) => {
      if (res.user.email !== null) 
        this.usuarioService.email = res.user.email;
        this.router.navigate(['/home']);

      this.flagError = false;

    }).catch((e) => {
      this.flagError = true;
      switch (e.code) {
        case "auth/invalid-email":
          this.msjError = "Email invalido";
          break;
        case "auth/email-already-in-use":
          this.msjError = "Email ya en uso";
          break;
        default:
          this.msjError = e.code
          break;
      }
    });
  }

  
}