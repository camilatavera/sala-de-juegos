import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { UsuarioService } from '../../services/usuario.service';

import { addDoc, collection, Firestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  clave: string = '';

  flagError: boolean = false;
  msjError: string = "";

  mockUser: Usuario;

  constructor(private router: Router, public auth: Auth, private usuarioService: UsuarioService, private firestore: Firestore) {
    this.mockUser = new Usuario("testing01@mail.com", "testing01");
  }

  iniciarSesion() {

    signInWithEmailAndPassword(this.auth, this.email, this.clave).then((res) => {
      if (res.user.email !== null) {
        this.usuarioService.email = res.user.email;
        this.saveLoginDb()
        this.router.navigate(['/home']);
      }
      this.flagError = false;
    }).catch((e) => {
      this.flagError = true;
      switch (e.code) {
        case "auth/invalid-email":
          this.msjError = "Email inválido";
          break;
        case "auth/user-not-found":
          this.msjError = "Usuario no encontrado";
          break;
        case "auth/invalid-credential":
          this.msjError = "Contraseña incorrecta";
          break;
        default:
          this.msjError = e.code;
          break;
      }
    });
  }

  registro(){
    this.router.navigate(['/registro']);
  }

  saveLoginDb(){
    let col = collection(this.firestore, 'logins');
      addDoc(col, { fecha: new Date(), "email": this.email})
  }


  accesoDirecto(){
    this.email = this.mockUser.email;
    this.clave = this.mockUser.clave;
  }

 

}
