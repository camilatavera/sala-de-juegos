import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  email: string;

  constructor() { 
    this.email = '';
  }

  setEmailUsuario(email: string) {
    this.email = email;
  }

  clenServiceUser() {
    this.email = '';
  }
}