import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../componentes/models/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  msjError: string = "";
  flagError: boolean = false;
  mockUser: Usuario;


  constructor(public auth: Auth, private usuarioService: UsuarioService, private firestore: Firestore) {
    this.mockUser = new Usuario("testing01@mail.com", "testing01");
  }

  iniciarSesion(email: string, clave: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, clave).then((res) => {
      if (res.user.email !== null) {
        this.usuarioService.email = res.user.email;
        this.flagError = false;
        return true;
      }
      return false;
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
      return false;
    });
  }

 

  saveLoginDb(){
    let col = collection(this.firestore, 'logins');
      addDoc(col, { fecha: new Date(), "email": this.usuarioService.email})
  }

  cerrarSesion(): Promise<boolean> {
      return signOut(this.auth).then(() => {
        this.usuarioService.clenServiceUser();
        return true 
      }).catch((e) => {
        this.msjError= e.code;
        return false;
      });
      
  }
  

  userLoggedIn() {
    return this.usuarioService.email !== '';
  } 

  getEmailLoggedIn() {
    return this.usuarioService.email;
  } 

}
