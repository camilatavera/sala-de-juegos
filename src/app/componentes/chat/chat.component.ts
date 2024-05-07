import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';


interface Mensaje {
  usuario: string;
  texto: string;
  hora: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('appMensajes') appMensajes!: ElementRef;

  msg: string = '';
  mensajes: Mensaje[] = [];
  email: string = '';
  

  constructor(private auth: AuthService) { 
  }


  ngOnInit(): void {
    this.email = this.auth.getEmailLoggedIn();
  }


  enviarMensaje(): void {
    if (this.msg.trim().length === 0) {
      return;
    }

    // adding nuevo mensaje
    this.mensajes.push({
      usuario: this.email,
      texto: this.msg,
      hora: this.obtenerHora()
    });

    this.msg = '';

    // scrolleamos para mostrar nuevo mensaje
    this.appMensajes.nativeElement.scrollTop = this.appMensajes.nativeElement.scrollHeight;
  }

  obtenerHora(): string {
    return new Date().toLocaleTimeString();
  }
}
